'use client';

import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    VStack,
    Text,
    Button,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { FaCheckCircle } from 'react-icons/fa';

export default function CalendarPage() {
    const bgColor = '#fff';

    return (
        <Box overflow="auto" height="100%">
            {/* Hero Section */}
            <Box bg={bgColor} py={20}>
                <Container maxW={'6xl'}>
                    <Stack direction="row" align={'center'} spacing={8}>
                        <VStack textAlign={{ base: 'center', lg: 'left' }} align={{ base: 'center', lg: 'flex-start' }} spacing={8}>
                            <Heading as="h1" size="2xl">
                                Your Project Calendar
                            </Heading>
                            <Text color={'gray.500'} maxW={'3xl'}>
                                Keep track of all your project milestones, tasks, and deadlines in one place.
                            </Text>
                            <Button colorScheme="teal" size="lg" leftIcon={<CalendarIcon />}>
                                View Calendar
                            </Button>
                        </VStack>
                    </Stack>
                </Container>
            </Box>

            {/* Features Section */}
            <Box py={20}>
                <Container maxW={'6xl'}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <Feature title={'Task Scheduling'} description={'Easily schedule and manage your tasks with an intuitive interface.'} />
                        <Feature title={'Milestone Tracking'} description={'Track major milestones and keep your projects on course.'} />
                        <Feature title={'Deadline Notifications'} description={'Get notified before important deadlines approach.'} />
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}

function Feature({ title, description }: { title: string; description: string }) {
    return (
        <Stack spacing={4}>
            <FaCheckCircle size="40px" color="teal" />
            <Heading as="h4" size="md">
                {title}
            </Heading>
            <Text>{description}</Text>
        </Stack>
    );
}
