'use client';

import {
  Box,
  Flex,
  Text,
  IconButton,
  VStack,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  SimpleGrid,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiTrendingUp, FiUser } from "react-icons/fi";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import { mockData } from "../../data/mockData";

const Dashboard = () => {
  return (
    <Flex direction="column" height="100vh">
      {/* Header */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        padding="4"
        bg="teal.500"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold">
          ProjectPulse Dashboard
        </Text>
        <IconButton
          aria-label="Menu"
          icon={<FiMenu />}
          variant="ghost"
          color="white"
        />
      </Flex>

      <Flex flex="1">
        {/* Sidebar */}
        <Box
          as="nav"
          width="200px"
          bg="gray.700"
          color="white"
          padding="4"
        >
          <VStack spacing="4" align="start">
            <NavItem icon={FiHome} label="Home" />
            <NavItem icon={FiTrendingUp} label="Analytics" />
            <NavItem icon={FiUser} label="Profile" />
          </VStack>
        </Box>

        {/* Main Content */}
        <Box flex="1" p="6" bg="gray.50">
          <Heading mb="6">Dashboard Overview</Heading>

          {/* Metric Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" mb="6">
            {mockData.metrics.map((data, index) => (
              <StatCard key={index} title={data.title} value={data.value} />
            ))}
          </SimpleGrid>

          {/* User Engagement Chart */}
          <Box bg="white" p="6" rounded="md" boxShadow="sm" mb="6">
            <Heading size="md" mb="4">User Engagement</Heading>
            <LineChart width={500} height={300} data={mockData.userEngagement}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
              <Line type="monotone" dataKey="newSignups" stroke="#82ca9d" />
            </LineChart>
          </Box>

          {/* Revenue Data Chart */}
          <Box bg="white" p="6" rounded="md" boxShadow="sm">
            <Heading size="md" mb="4">Revenue Data</Heading>
            <BarChart width={500} height={300} data={mockData.revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Bar dataKey="MRR" fill="#82ca9d" />
            </BarChart>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

// Reusable NavItem Component
const NavItem = ({ icon, label }: { icon: any, label: string }) => {
  return (
    <HStack spacing="4">
      <Icon as={icon} boxSize="6" />
      <Text>{label}</Text>
    </HStack>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value }: { title: string, value: string }) => {
  return (
    <Box
      bg="white"
      p="6"
      rounded="md"
      boxShadow="sm"
    >
      <Stat>
        <StatLabel>{title}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
};

export default Dashboard;
