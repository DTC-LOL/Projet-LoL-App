import { useMediaQuery } from '@react-hook/media-query';
import { breakpoints } from '../services/media';
import { useTheme } from 'styled-components';

const useBreakpoint = (): {
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopLarge: boolean;
} => {
	const theme = useTheme();

	return {
		isTablet: useMediaQuery(`(min-width: ${breakpoints.tablet})`),
		isDesktop: useMediaQuery(`(min-width: ${breakpoints.desktop})`),
		isDesktopLarge: useMediaQuery(`(min-width: ${breakpoints.widescreen})`),
	};
};

export default useBreakpoint;
