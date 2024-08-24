// data/mockData.js

import { FiDollarSign, FiUserPlus, FiUsers } from 'react-icons/fi';

export const mockData: any = {
    metrics: [
        { title: 'Active Users', value: '5,238', icon: FiUsers, color: '#4e699f' },
        { title: 'New Signups', value: '1,210', icon: FiUserPlus, color: '#d75151' },
        { title: 'Monthly Revenue', value: '$9,245.23', icon: FiDollarSign, color: '#51d791' }
    ],
    userEngagement: [
        {
            month: 'Jan',
            activeUsers: 4800,
            newSignups: 1100,
            DAU: 1200,
            MAU: 4800,
            retentionRate: {
                cohort: 'January',
                retention: [100, 85, 75, 70, 68, 66]
            }
        },
        {
            month: 'Feb',
            activeUsers: 5000,
            newSignups: 1200,
            DAU: 1300,
            MAU: 5000,
            retentionRate: {
                cohort: 'February',
                retention: [100, 88, 78, 74, 70, 68]
            }
        },
        {
            month: 'Mar',
            activeUsers: 5300,
            newSignups: 1250,
            DAU: 1400,
            MAU: 5300,
            retentionRate: {
                cohort: 'March',
                retention: [100, 90, 80, 76, 72, 70]
            }
        },
        {
            month: 'Apr',
            activeUsers: 5500,
            newSignups: 1300,
            DAU: 1450,
            MAU: 5500,
            retentionRate: {
                cohort: 'April',
                retention: [100, 87, 77, 73, 69, 67]
            }
        },
        {
            month: 'May',
            activeUsers: 5700,
            newSignups: 1350,
            DAU: 1500,
            MAU: 5700,
            retentionRate: {
                cohort: 'May',
                retention: [100, 89, 79, 75, 71, 69]
            }
        },
        {
            month: 'Jun',
            activeUsers: 6000,
            newSignups: 1400,
            DAU: 1600,
            MAU: 6000,
            retentionRate: {
                cohort: 'June',
                retention: [100, 91, 81, 77, 73, 71]
            }
        },
        {
            month: 'Jul',
            activeUsers: 6200,
            newSignups: 1450,
            DAU: 1650,
            MAU: 6200,
            retentionRate: {
                cohort: 'July',
                retention: [100, 92, 82, 78, 74, 72]
            }
        },
        {
            month: 'Aug',
            activeUsers: 6400,
            newSignups: 1500,
            DAU: 1700,
            MAU: 6400,
            retentionRate: {
                cohort: 'August',
                retention: [100, 93, 83, 79, 75, 73]
            }
        },
        {
            month: 'Sep',
            activeUsers: 6600,
            newSignups: 1550,
            DAU: 1750,
            MAU: 6600,
            retentionRate: {
                cohort: 'September',
                retention: [100, 94, 84, 80, 76, 74]
            }
        },
        {
            month: 'Oct',
            activeUsers: 6800,
            newSignups: 1600,
            DAU: 1800,
            MAU: 6800,
            retentionRate: {
                cohort: 'October',
                retention: [100, 95, 85, 81, 77, 75]
            }
        },
        {
            month: 'Nov',
            activeUsers: 7000,
            newSignups: 1650,
            DAU: 1850,
            MAU: 7000,
            retentionRate: {
                cohort: 'November',
                retention: [100, 96, 86, 82, 78, 76]
            }
        },
        {
            month: 'Dec',
            activeUsers: 7200,
            newSignups: 1700,
            DAU: 1900,
            MAU: 7200,
            retentionRate: {
                cohort: 'December',
                retention: [100, 97, 87, 83, 79, 77]
            }
        }
    ],
    revenue: [
        { month: 'Jan', MRR: 10000, ARPU: 1000, churnRate: 5 },
        { month: 'Feb', MRR: 10500, ARPU: 1200, churnRate: 4.5 },
        { month: 'Mar', MRR: 11000, ARPU: 1200, churnRate: 4 },
        { month: 'Apr', MRR: 11500, ARPU: 1300, churnRate: 4.2 },
        { month: 'May', MRR: 12000, ARPU: 1200, churnRate: 4.1 },
        { month: 'Jun', MRR: 9500, ARPU: 1200, churnRate: 4.0 },
        { month: 'Jul', MRR: 13000, ARPU: 1500, churnRate: 3.8 },
        { month: 'Aug', MRR: 14500, ARPU: 1400, churnRate: 3.7 },
        { month: 'Sep', MRR: 10000, ARPU: 1400, churnRate: 3.6 },
        { month: 'Oct', MRR: 14500, ARPU: 1200, churnRate: 3.5 },
        { month: 'Nov', MRR: 12000, ARPU: 1200, churnRate: 3.4 },
        { month: 'Dec', MRR: 13500, ARPU: 1200, churnRate: 3.3 },
        { month: 'Jan (next year)', MRR: 10000, ARPU: 1200, churnRate: 3.2 },
        { month: 'Feb (next year)', MRR: 12500, ARPU: 1200, churnRate: 3.1 },
        { month: 'Mar (next year)', MRR: 15000, ARPU: 1200, churnRate: 3.0 }
    ],
    projectUsage: [
        { feature: 'Kanban', usage: 70 },
        { feature: 'Gantt', usage: 50 },
        { feature: 'Time Tracking', usage: 40 },
        { feature: 'Task Management', usage: 90 }
    ],
    cohortAnalysisData: [
        {
            cohort: 'January',
            retention: [100, 85, 75, 70, 68, 66]
        },
        {
            cohort: 'February',
            retention: [100, 88, 78, 74, 70, 68]
        },
        {
            cohort: 'March',
            retention: [100, 90, 80, 76, 72, 70]
        },
        {
            cohort: 'April',
            retention: [100, 87, 77, 73, 69, 67]
        },
        {
            cohort: 'May',
            retention: [100, 89, 79, 75, 71, 69]
        },
        {
            cohort: 'June',
            retention: [100, 91, 81, 77, 73, 71]
        },
        {
            cohort: 'July',
            retention: [100, 92, 82, 78, 74, 72]
        },
        {
            cohort: 'August',
            retention: [100, 93, 83, 79, 75, 73]
        },
        {
            cohort: 'September',
            retention: [100, 94, 84, 80, 76, 74]
        },
        {
            cohort: 'October',
            retention: [100, 95, 85, 81, 77, 75]
        },
        {
            cohort: 'November',
            retention: [100, 96, 86, 82, 78, 76]
        },
        {
            cohort: 'December',
            retention: [100, 97, 87, 83, 79, 77]
        }
    ],
    systemPerformance: [
        {
            day: 'Monday',
            uptime: 99.9,
            responseTime: {
                average: 200,
                max: 350,
                min: 150
            },
            apiSuccessRate: 99.7,
            errorRates: {
                error500: 0.02,
                error404: 0.05
            }
        },
        {
            day: 'Tuesday',
            uptime: 99.8,
            responseTime: {
                average: 210,
                max: 340,
                min: 160
            },
            apiSuccessRate: 99.6,
            errorRates: {
                error500: 0.03,
                error404: 0.06
            }
        },
        {
            day: 'Wednesday',
            uptime: 100.0,
            responseTime: {
                average: 190,
                max: 330,
                min: 140
            },
            apiSuccessRate: 99.9,
            errorRates: {
                error500: 0.01,
                error404: 0.04
            }
        },
        {
            day: 'Thursday',
            uptime: 99.7,
            responseTime: {
                average: 220,
                max: 360,
                min: 170
            },
            apiSuccessRate: 99.5,
            errorRates: {
                error500: 0.04,
                error404: 0.07
            }
        },
        {
            day: 'Friday',
            uptime: 99.8,
            responseTime: {
                average: 215,
                max: 355,
                min: 165
            },
            apiSuccessRate: 99.6,
            errorRates: {
                error500: 0.03,
                error404: 0.05
            }
        },
        {
            day: 'Saturday',
            uptime: 99.9,
            responseTime: {
                average: 205,
                max: 340,
                min: 155
            },
            apiSuccessRate: 99.8,
            errorRates: {
                error500: 0.02,
                error404: 0.04
            }
        },
        {
            day: 'Sunday',
            uptime: 100.0,
            responseTime: {
                average: 195,
                max: 320,
                min: 140
            },
            apiSuccessRate: 99.9,
            errorRates: {
                error500: 0.01,
                error404: 0.03
            }
        },
        // Additional Data
        {
            day: 'Monday',
            uptime: 99.7,
            responseTime: {
                average: 210,
                max: 350,
                min: 150
            },
            apiSuccessRate: 99.6,
            errorRates: {
                error500: 0.03,
                error404: 0.06
            }
        },
        {
            day: 'Tuesday',
            uptime: 99.8,
            responseTime: {
                average: 220,
                max: 340,
                min: 160
            },
            apiSuccessRate: 99.7,
            errorRates: {
                error500: 0.02,
                error404: 0.05
            }
        },
        {
            day: 'Wednesday',
            uptime: 100.0,
            responseTime: {
                average: 200,
                max: 330,
                min: 145
            },
            apiSuccessRate: 99.9,
            errorRates: {
                error500: 0.01,
                error404: 0.04
            }
        },
        {
            day: 'Thursday',
            uptime: 99.6,
            responseTime: {
                average: 230,
                max: 370,
                min: 175
            },
            apiSuccessRate: 99.4,
            errorRates: {
                error500: 0.05,
                error404: 0.08
            }
        },
        {
            day: 'Friday',
            uptime: 99.8,
            responseTime: {
                average: 215,
                max: 355,
                min: 165
            },
            apiSuccessRate: 99.7,
            errorRates: {
                error500: 0.03,
                error404: 0.05
            }
        },
        {
            day: 'Saturday',
            uptime: 99.9,
            responseTime: {
                average: 210,
                max: 345,
                min: 160
            },
            apiSuccessRate: 99.8,
            errorRates: {
                error500: 0.02,
                error404: 0.04
            }
        },
        {
            day: 'Sunday',
            uptime: 100.0,
            responseTime: {
                average: 195,
                max: 320,
                min: 140
            },
            apiSuccessRate: 99.9,
            errorRates: {
                error500: 0.01,
                error404: 0.03
            }
        }
    ]
};
