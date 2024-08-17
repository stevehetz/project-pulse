// data/mockData.js

export const mockData = {
    metrics: [
      { title: "Active Users", value: "5,000" },
      { title: "New Signups", value: "1,200" },
      { title: "Monthly Revenue", value: "$10,000" }
    ],
    userEngagement: [
      { month: 'Jan', activeUsers: 5000, newSignups: 1200, retentionRate: 85 },
      { month: 'Feb', activeUsers: 5200, newSignups: 1100, retentionRate: 83 },
      { month: 'Mar', activeUsers: 5400, newSignups: 1300, retentionRate: 86 },
    ],
    revenueData: [
      { month: 'Jan', MRR: 10000, ARPU: 20, churnRate: 5 },
      { month: 'Feb', MRR: 10500, ARPU: 21, churnRate: 4.5 },
      { month: 'Mar', MRR: 11000, ARPU: 22, churnRate: 4 },
    ],
    projectUsage: [
      { feature: 'Kanban', usage: 70 },
      { feature: 'Gantt', usage: 50 },
      { feature: 'Time Tracking', usage: 40 },
      { feature: 'Task Management', usage: 90 },
    ],
    systemPerformance: [
      { day: 'Mon', uptime: 99.9, responseTime: 200, errorRate: 0.01 },
      { day: 'Tue', uptime: 99.8, responseTime: 210, errorRate: 0.02 },
      { day: 'Wed', uptime: 100, responseTime: 190, errorRate: 0.00 },
    ],
  };
  
  