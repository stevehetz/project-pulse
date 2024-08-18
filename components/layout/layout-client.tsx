'use client';

import { Box, Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { Header } from '../header/header';
import { Nav } from '../nav/nav';
import { useDisclosure } from '@chakra-ui/react';

export default function LayoutClient({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                    ml={{ base: 0, lg: '250px' }}
                    width='full'
                    padding='4'
                    overflowY='auto'
                    height='100%'>
                    {children}
                </Box>
            </Flex>
        </>
    );
}
