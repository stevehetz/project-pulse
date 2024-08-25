'use client';

import {
    Box,
    Link,
    Text,
    HStack,
    VStack,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaTachometerAlt, FaTasks, FaClock } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const Nav = ({ isOpen, onClose }) => {
    const pathname = usePathname(); // Get the current path
    const isMobile = useBreakpointValue({ base: true, lg: false }); // Check if the view is mobile

    const navItems = [
        { href: '/demo/dashboard', label: 'Dashboard', icon: FaTachometerAlt },
        { href: '/demo/kanban', label: 'Kanban', icon: FaTasks },
        { href: '/demo/gantt-chart', label: 'Gantt Chart', icon: FaClock }
    ];

    const NavContent = () => (
        <VStack
            align='flex-start'
            spacing={3}
            pt={{ base: 4, lg: 0 }}>
            {navItems.map(item => {
                const isActive = pathname === item.href;

                return (
                    <Link
                        as={NextLink}
                        key={item.href}
                        href={item.href}
                        passHref
                        display='flex'
                        alignItems='center'
                        w='full'
                        py='2'
                        px='3'
                        borderRadius='md'
                        bg={isActive ? 'gray.100' : 'transparent'}
                        color='gray.600'
                        pointerEvents={isActive ? 'none' : 'auto'}
                        cursor={isActive ? 'default' : 'pointer'}
                        _hover={{ bg: !isActive && 'gray.100' }}
                        onClick={onClose}>
                        <HStack spacing={3}>
                            <item.icon size={20} />
                            <Text
                                fontSize='lg'
                                fontWeight='bold'>
                                {item.label}
                            </Text>
                        </HStack>
                    </Link>
                );
            })}
        </VStack>
    );

    // Handle drawer close on resize
    useEffect(() => {
        if (!isMobile && isOpen) {
            onClose();
        }
    }, [isMobile, isOpen, onClose]);

    return (
        <>
            {/* Mobile view */}
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <NavContent />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* Desktop view */}
            <Box
                as='nav'
                position='fixed'
                width='250px'
                height='100vh'
                bg='white'
                zIndex={5}
                p='4'
                boxShadow='md'
                display={{ base: 'none', lg: 'block' }}>
                <NavContent />
            </Box>
        </>
    );
};
