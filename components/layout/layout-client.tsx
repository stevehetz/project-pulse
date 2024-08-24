'use client';

import { Box, Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { Header } from '../header/header';
import { Nav } from '../nav/nav';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

export default function LayoutClient({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const { isOpen, onOpen, onClose } = useDisclosure();
    const boxRef = useRef<any>(null);

    useEffect(() => {
        if (boxRef.current) {
            boxRef.current.scrollTop = 0;
            boxRef.current.scrollLeft = 0;
        }
    }, [pathname]);

    return isHomePage ? (
        children
    ) : (
        <>
            <Header onToggle={onOpen} />
            <Nav
                isOpen={isOpen}
                onClose={onClose}
            />
            <Flex height='calc(100vh - 64px)'>
                <Box
                    ref={boxRef}
                    ml={{ base: 0, lg: '250px' }}
                    width='full'
                    overflow='auto'
                    height='100%'>
                    {children}
                </Box>
            </Flex>
        </>
    );
}
