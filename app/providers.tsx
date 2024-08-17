'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        Heading: {
            baseStyle: {
                color: 'gray.600'
            }
        },
        Link: {
            baseStyle: {
                color: 'teal.500'
            }
        }
    }
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
