'use client';

import { useState, useEffect } from 'react';
import { Flex, HStack, Text, IconButton, useBreakpointValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaProjectDiagram, FaSignInAlt, FaBars } from 'react-icons/fa';

export const Header = ({ onToggle }) => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            as='header'
            bg='#fff'
            color='#4b79d7'
            borderBottom={1}
            borderStyle='solid'
            borderColor='gray.200'
            px='4'
            py='1'
            boxShadow='sm'>
            <HStack spacing={2}>
                {mounted && isMobile && (
                    <IconButton
                        aria-label='Toggle Navigation'
                        icon={<FaBars />}
                        onClick={onToggle}
                        variant='ghost'
                        size='lg'
                    />
                )}

                <Flex alignItems='center'>
                    <HStack
                        alignItems='center'
                        spacing={2}>
                        <FaProjectDiagram size={24} />
                        <Text
                            marginLeft='8px'
                            fontWeight='bold'
                            fontSize='25px'>
                            ProjectPulse
                        </Text>
                    </HStack>
                </Flex>
            </HStack>
            <Flex
                alignItems='center'
                justifyContent='flex-end'
                padding='1rem'>
                <NextLink
                    href='/'
                    passHref>
                    <HStack
                        spacing={4}
                        cursor={'pointer'}
                        display='flex'
                        alignItems='center'>
                        <FaSignInAlt size={20} />
                        {!isMobile && <Text>Sign Out</Text>}
                    </HStack>
                </NextLink>
            </Flex>
        </Flex>
    );
};
