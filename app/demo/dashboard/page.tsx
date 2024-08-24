import { DashboardPage } from '@/components/demo/dashboard-page';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface DashboardProps {
    metrics: any;
    userEngagement: any;
    systemPerformance: any;
    revenue: any;
}

const getDashboardData = async (): Promise<DashboardProps> => {
    const metrics = await prisma.metric.findMany();

    const userEngagement = await prisma.userEngagement.findMany({
        include: {
            retentionRate: true
        }
    });

    const systemPerformance = await prisma.systemPerformance.findMany(); // Adjust based on your actual model name

    // Fetching Revenue data
    const revenue = await prisma.revenue.findMany(); // Adjust based on your actual model name

    return { metrics, userEngagement, systemPerformance, revenue };
};

export default async function Dashboard() {
    const { metrics, userEngagement, systemPerformance, revenue } = await getDashboardData();
    return (
        <DashboardPage
            metrics={metrics}
            userEngagement={userEngagement}
            systemPerformance={systemPerformance}
            revenue={revenue}
        />
    );
}
