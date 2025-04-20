import { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: ReactNode }) {
	return (
		<NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
			{children}
		</NextThemesProvider>
	);
}
