'use client';

import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Stack,
    Text,
    VStack
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function HomePage() {
    const bgColor = 'gray.50'; // Light mode as default or 'gray.800' for dark mode

    return (
        <Box>
            {/* Hero Section */}
            <Box
                bg={bgColor}
                py={20}>
                <Container maxW={'6xl'}>
                    <Stack
                        direction='row'
                        align={'center'}
                        spacing={8}>
                        {/* Hero Image */}
                        <Image
                            src='/home-image.jpg'
                            alt='ProjectPulse Hero Image'
                            width={{ base: '100%', lg: '500px' }}
                            height={{ base: 'auto', lg: '300px' }}
                            display={{ base: 'none', lg: 'block' }}
                            style={{ objectFit: 'cover' }}
                        />
                        <VStack
                            textAlign={{ base: 'center', lg: 'left' }}
                            align={{ base: 'center', lg: 'flex-start' }}
                            spacing={8}>
                            <Heading
                                as='h1'
                                size='2xl'>
                                Manage Your Projects Seamlessly with ProjectPulse
                            </Heading>
                            <Text
                                color={'gray.500'}
                                maxW={'3xl'}>
                                Simplify your project management process with our all-in-one platform,
                                designed to help your team collaborate, stay organized, and deliver on time.
                            </Text>
                            <Stack
                                direction={'row'}
                                spacing={4}
                                justify={{ base: 'center', md: 'flex-start' }}>
                                <Button
                                    as={NextLink}
                                    href='/dashboard'
                                    colorScheme='teal'
                                    size='lg'>
                                    Demo
                                </Button>
                                <Button
                                    variant='outline'
                                    size='lg'>
                                    Sign Up
                                </Button>
                            </Stack>
                        </VStack>
                    </Stack>
                </Container>
            </Box>

            {/* Features Section */}
            <Box py={20}>
                <Container maxW={'6xl'}>
                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={10}>
                        <Feature
                            title={'Kanban Boards'}
                            description={'Visualize your workflow with customizable Kanban boards.'}
                        />
                        <Feature
                            title={'Gantt Charts'}
                            description={'Plan your projects with detailed Gantt charts.'}
                        />
                        <Feature
                            title={'Time Tracking'}
                            description={'Track time spent on tasks and manage your resources efficiently.'}
                        />
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box
                bg={bgColor}
                py={20}>
                <Container
                    maxW={'6xl'}
                    textAlign={'center'}>
                    <Heading
                        as='h3'
                        size='lg'
                        mb={8}>
                        What Our Users Say
                    </Heading>
                    <Text fontSize={'xl'}>
                        &quot;ProjectPulse has transformed how we manage our projects. The features are
                        intuitive and help us stay on track.&quot;
                    </Text>
                    <Text
                        fontWeight={'bold'}
                        mt={4}>
                        – John Doe, CEO of Acme Corp
                    </Text>
                </Container>
            </Box>

            {/* Pricing Section */}
            <Box py={20}>
                <Container
                    maxW={'6xl'}
                    textAlign={'center'}>
                    <Heading
                        as='h3'
                        size='lg'
                        mb={8}>
                        Choose Your Plan
                    </Heading>
                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={10}>
                        <PricingCard
                            title={'Basic'}
                            price={'$19/mo'}
                            features={[
                                'Task Management',
                                'Kanban Boards',
                                'Basic Reporting',
                                'Team Collaboration (up to 5 members)',
                                'Email Support'
                            ]}
                        />
                        <PricingCard
                            title={'Pro'}
                            price={'$49/mo'}
                            features={[
                                'Everything in Basic',
                                'Gantt Charts',
                                'Time Tracking',
                                'Advanced Reporting',
                                'Integration Support',
                                'Priority Support',
                                'Custom Workflows',
                                'Team Collaboration (up to 20 members)'
                            ]}
                        />
                        <PricingCard
                            title={'Enterprise'}
                            price={'$99/mo'}
                            features={[
                                'Everything in Pro',
                                'Dedicated Account Manager',
                                'Custom Integrations',
                                'Unlimited Team Collaboration',
                                'Enhanced Security (SSO, Role-Based Access)',
                                'API Access',
                                'Onboarding & Training',
                                '24/7 Support'
                            ]}
                        />
                    </SimpleGrid>
                </Container>
            </Box>

            {/* CTA Banner */}
            <Box
                bg={'teal.500'}
                py={10}
                textAlign={'center'}>
                <Container maxW={'6xl'}>
                    <Heading
                        as='h3'
                        size='lg'
                        color={'white'}>
                        Start Your Free Trial Today!
                    </Heading>
                    <Button
                        colorScheme='teal'
                        size='lg'
                        mt={4}>
                        Sign Up Now
                    </Button>
                </Container>
            </Box>

            {/* Footer */}
            <Box
                bg={'gray.700'}
                color={'gray.200'}
                py={10}>
                <Container
                    maxW={'6xl'}
                    textAlign={'center'}>
                    <Text>&copy; 2024 ProjectPulse. All rights reserved.</Text>
                </Container>
            </Box>
        </Box>
    );
}

// Feature Component
function Feature({ title, description }: { title: string; description: string }) {
    return (
        <Stack spacing={4}>
            <Icon
                as={FaCheckCircle}
                w={10}
                h={10}
                color={'teal.400'}
            />
            <Heading
                as='h4'
                size='md'>
                {title}
            </Heading>
            <Text>{description}</Text>
        </Stack>
    );
}

// PricingCard Component
function PricingCard({ title, price, features }: { title: string; price: string; features: string[] }) {
    return (
        <Box
            borderWidth={1}
            borderRadius={'lg'}
            overflow={'hidden'}
            p={6}>
            <Heading
                as='h4'
                size='md'
                mb={4}>
                {title}
            </Heading>
            <Text
                fontSize={'2xl'}
                fontWeight={'bold'}>
                {price}
            </Text>
            <Stack
                mt={6}
                spacing={3}>
                {features.map((feature, index) => (
                    <Text key={index}>{feature}</Text>
                ))}
            </Stack>
            <Button
                mt={6}
                colorScheme='teal'
                size='md'>
                Select
            </Button>
        </Box>
    );
}
