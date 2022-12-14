/* eslint-disable @typescript-eslint/no-var-requires */

const useTranslation = (
	namespace = "common",
	keySplit = true
): {
	t: (key: string, variables?: string[]) => any;
	locale: string | undefined;
} => {
	const locale = navigator.language.split("-")[0];
	
	let translation: any;

	try {
		translation = require(`../locales/${locale}/${namespace}.json`);
	} catch (err) {
		console.error(
			`An error occurred while loading the translation file: ${namespace}`
		);
	}

	const translate = (key: string, variables: string[] = []) => {
		const keyList = keySplit ? key.split(".") : [key];

		let parent = translation;

		keyList.forEach((k) => (parent = parent[k] ?? key));

		/*

* parent can countain %s1, %s2, ...

* variables can contain "value1", "value2", ...

* we replace the %s1, %s2, ... with the corresponding value

*/

		if (parent && variables.length > 0) {
			parent = parent.replace(
				/%s(\d+)/g,

				(_: any, index: any) => variables[parseInt(index) - 1] ?? undefined
			);
		}

		return parent || key;
	};

	return { t: translate, locale };
};

export default useTranslation;

