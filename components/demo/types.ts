export interface IUserEngagement {
    month: string;
    activeUsers: number;
    newSignups: number;
    DAU: number;
    MAU: number;
    retentionRate: {
        cohort: string;
        retention: number[];
    };
}

export interface ISystemPerformance {
    day: string;
    uptime: number;
    averageTime: number;
    maxTime: number;
    minTime: number;
    apiSuccessRate: number;
    error500: number;
    error404: number;
}

export interface IRevenue {
    month: string;
    MRR: number;
    ARPU: number;
    churnRate: number;
}

export interface IProjectUsage {
    feature: string;
    usage: number;
}

export interface ICohortAnalysisData {
    cohort: string;
    retention: number[];
}

export interface IMockData {
    metrics: { title: string; value: string; icon: any; color: string }[];
    userEngagement: IUserEngagement[];
    revenue: IRevenue[];
    projectUsage: IProjectUsage[];
    systemPerformance: ISystemPerformance[];
    cohortAnalysisData: ICohortAnalysisData[];
}
