'use client';

import { Box, Container, Heading, VStack, SimpleGrid, Text, Button } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

export default function CalendarPage() {
  return (
    <Box overflow='auto' height='100%'>
      {/* Header */}
      <Box bg={'#fff'} py={10} textAlign={'center'}>
        <Container maxW={'6xl'}>
          <Heading as='h1' size='2xl'>
            Calendar
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Manage your events and deadlines seamlessly.
          </Text>
        </Container>
      </Box>
      {/* Calendar Section */}
      <Box py={20}>
        <Container maxW={'6xl'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Placeholder for future calendar component */}
            <VStack>
              <CalendarIcon w={20} h={20} color='teal.400' />
              <Text>Coming Soon: Interactive Calendar</Text>
              <Button colorScheme='teal' size='lg'>Add Event</Button>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
