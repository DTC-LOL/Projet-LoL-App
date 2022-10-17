/* craco.config.js */
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, 'src/components'),
            "@data": path.resolve(__dirname, 'src/data'),
            "@hooks": path.resolve(__dirname, 'src/hooks'),
            "@pages": path.resolve(__dirname, 'src/pages'),
            "@services": path.resolve(__dirname, 'src/services'),
            "@store": path.resolve(__dirname, 'src/store'),
            "@typesDef": path.resolve(__dirname, 'src/types'),
            "@utils": path.resolve(__dirname, 'src/utils')
        }
    },
};