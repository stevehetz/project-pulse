'use client';

import {
    Box,
    Flex,
    Heading,
    IconButton,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text
} from '@chakra-ui/react';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

import { IconType } from 'react-icons';
import { FiMenu } from 'react-icons/fi';
import { IRevenue, ISystemPerformance, IUserEngagement, mockData } from '../../data/mockData'; // Importing the mock data
import { color } from 'chart.js/helpers';
const { userEngagement, systemPerformance, revenue } = mockData;

interface DashboardDataState {
    userEngagement: IUserEngagement[];
    systemPerformance: ISystemPerformance[];
    revenue: IRevenue[];
}

export const DashboardPage = () => {
    const [data, setData] = useState<DashboardDataState>({
        userEngagement: [],
        systemPerformance: [],
        revenue: []
    });

    useEffect(() => {
        // Simulate fetching the data
        setData({
            userEngagement,
            systemPerformance,
            revenue
        });
    }, []);

    const userEngagementChartData = {
        labels: data.userEngagement.map(item => item.month),
        datasets: [
            {
                label: 'Active Users',
                data: data.userEngagement.map(item => item.activeUsers),
                borderColor: '#8884d8',
                fill: false
            },
            {
                label: 'New Signups',
                data: data.userEngagement.map(item => item.newSignups),
                borderColor: '#82ca9d',
                fill: false
            }
        ]
    };

    const revenueChartData = {
        labels: data.revenue.map(item => item.month),
        datasets: [
            {
                label: 'Average Revenue Per User (ARPU)',
                data: data.revenue.map(item => item.ARPU),
                backgroundColor: '#8884d8'
            },
            {
                label: 'Monthly Recurring Revenue (MRR)',
                data: data.revenue.map(item => item.MRR),
                backgroundColor: '#92DBF1'
            }
        ]
    };

    const churnRateChartData = {
        labels: data.revenue.map(item => item.month),
        datasets: [
            {
                label: 'Churn Rate',
                data: data.revenue.map(item => item.churnRate),
                backgroundColor: '#92F1C8',
                fill: true
            }
        ]
    };

    const systemUptimeChartData = {
        labels: data.systemPerformance.map(item => item.day),
        datasets: [
            {
                label: 'Server Uptime (%)',
                data: data.systemPerformance.map(item => item.uptime),
                borderColor: '#E9B060',
                fill: false
            }
        ]
    };

    const responseTimesChartData = {
        labels: data.systemPerformance.map(item => item.day),
        datasets: [
            {
                label: 'Average Response Time (ms)',
                data: data.systemPerformance.map(item => item.responseTime.average),
                borderColor: '#36a2eb',
                fill: false
            },
            {
                label: 'Max Response Time (ms)',
                data: data.systemPerformance.map(item => item.responseTime.max),
                borderColor: '#ff6384',
                fill: false
            },
            {
                label: 'Min Response Time (ms)',
                data: data.systemPerformance.map(item => item.responseTime.min),
                borderColor: '#ffcd56',
                fill: false
            }
        ]
    };

    return (
        <Flex
            direction='column'
            height='100vh'>
            {/* Header */}
            <Flex
                as='header'
                align='center'
                justify='space-between'
                padding='4'
                bg='gray.800'
                color='white'>
                <Text
                    fontSize='xl'
                    fontWeight='bold'>
                    ProjectPulse Dashboard
                </Text>
                <IconButton
                    aria-label='Menu'
                    icon={<FiMenu />}
                    variant='ghost'
                    color='white'
                />
            </Flex>

            <Flex flex='1'>
                {/* Main Content */}
                <Box
                    flex='1'
                    p='6'
                    bg='gray.100'>
                    {/* Metric Cards */}
                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing='6'
                        mb='6'>
                        {mockData.metrics.map((data, index) => (
                            <StatCard
                                key={index}
                                title={data.title}
                                value={data.value}
                                icon={data.icon}
                                color={data.color}
                            />
                        ))}
                    </SimpleGrid>

                    {/* Responsive Charts */}
                    <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={5}>
                        <Box
                            borderWidth='1px'
                            borderRadius='lg'
                            p={5}
                            bgColor='#fff'>
                            <Heading
                                size='md'
                                mb={4}>
                                User Engagement
                            </Heading>
                            <Line data={userEngagementChartData} />
                        </Box>
                        <Box
                            borderWidth='1px'
                            borderRadius='lg'
                            p={5}
                            bgColor='#fff'>
                            <Heading
                                size='md'
                                mb={4}>
                                Revenue Metrics
                            </Heading>
                            <Bar
                                data={revenueChartData}
                                options={{
                                    scales: {
                                        x: {
                                            stacked: true
                                        },
                                        y: {
                                            stacked: true
                                        }
                                    }
                                }}
                            />
                        </Box>
                        <Box
                            borderWidth='1px'
                            borderRadius='lg'
                            p={5}
                            bgColor='#fff'>
                            <Heading
                                size='md'
                                mb={4}>
                                Churn Rate
                            </Heading>
                            <Bar data={churnRateChartData} />
                        </Box>
                        <Box
                            borderWidth='1px'
                            borderRadius='lg'
                            p={5}
                            bgColor='#fff'>
                            <Heading
                                size='md'
                                mb={4}>
                                Response Times
                            </Heading>
                            <Line data={responseTimesChartData} />
                        </Box>
                        <Box
                            borderWidth='1px'
                            borderRadius='lg'
                            p={5}
                            bgColor='#fff'>
                            <Heading
                                size='md'
                                mb={4}>
                                Server Uptime
                            </Heading>
                            <Line data={systemUptimeChartData} />
                        </Box>

                        <Box
                            borderWidth='1px'
                            borderRadius='lg'
                            p={5}
                            bgColor='#fff'>
                            <Heading
                                size='md'
                                mb={4}>
                                Revenue Breakdown
                            </Heading>
                            <div
                                style={{
                                    position: 'relative',
                                    maxWidth: '300px',
                                    maxHeight: '300px',
                                    margin: '0 auto'
                                }}>
                                <Pie
                                    data={{
                                        labels: ['MRR', 'ARPU'],
                                        datasets: [
                                            {
                                                data: [
                                                    data.revenue.reduce((acc, item) => acc + item.MRR, 0),
                                                    data.revenue.reduce((acc, item) => acc + item.ARPU, 0)
                                                ],
                                                backgroundColor: ['#ff7300', '#8884d8']
                                            }
                                        ]
                                    }}
                                    options={{
                                        maintainAspectRatio: true,
                                        responsive: true
                                    }}
                                />
                            </div>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Flex>
    );
};

const StatCard = ({
    title,
    value,
    icon,
    color
}: {
    title: string;
    value: string;
    icon: IconType;
    color?: string;
}) => {
    return (
        <Box
            bg='white'
            p='6'
            rounded='md'
            boxShadow='sm'>
            <Flex align='center'>
                <Box
                    as={icon}
                    size='44px'
                    color='white'
                    bg={color || 'gray.800'}
                    borderRadius='full'
                    p='2'
                    mr='4'
                />
                <Stat>
                    <StatLabel>{title}</StatLabel>
                    <StatNumber>{value}</StatNumber>
                </Stat>
            </Flex>
        </Box>
    );
};
