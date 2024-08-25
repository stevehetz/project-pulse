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

    const systemPerformance = await prisma.systemPerformance.findMany();

    const revenue = await prisma.revenue.findMany();

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
