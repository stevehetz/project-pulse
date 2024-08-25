'use client';

import { Box } from '@chakra-ui/react';
import React from 'react';
import { Chart } from 'react-google-charts';

export const GanttChartPage = () => {
    const data = [
        [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'string', label: 'Resource' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' }
        ],
        [
            'Phase A',
            'High-level requirements',
            'Phase A',
            new Date(2023, 7, 1),
            new Date(2023, 7, 5),
            null,
            100,
            null
        ],
        [
            'Phase B',
            'Marketing plan',
            'Phase B',
            new Date(2023, 7, 6),
            new Date(2023, 7, 12),
            null,
            80,
            'Phase A'
        ],
        [
            'Phase C',
            'Review full site',
            'Phase C',
            new Date(2023, 7, 13),
            new Date(2023, 7, 19),
            null,
            50,
            'Phase B'
        ],
        [
            'Phase D',
            'Finalize budget',
            'Phase D',
            new Date(2023, 7, 20),
            new Date(2023, 7, 22),
            null,
            70,
            'Phase C'
        ],
        [
            'Phase E',
            'Develop prototype',
            'Phase E',
            new Date(2023, 7, 23),
            new Date(2023, 7, 30),
            null,
            60,
            'Phase D'
        ],
        [
            'Phase F',
            'User testing',
            'Phase F',
            new Date(2023, 8, 1),
            new Date(2023, 8, 5),
            null,
            40,
            'Phase E'
        ],
        [
            'Phase G',
            'Marketing launch',
            'Phase G',
            new Date(2023, 8, 6),
            new Date(2023, 8, 10),
            null,
            30,
            'Phase F'
        ],
        [
            'Phase H',
            'Team presentation',
            'Phase H',
            new Date(2023, 8, 11),
            new Date(2023, 8, 13),
            null,
            20,
            'Phase G'
        ],
        [
            'Phase I',
            'Website launch',
            'Phase I',
            new Date(2023, 8, 14),
            new Date(2023, 8, 18),
            null,
            10,
            'Phase H'
        ],
        [
            'Phase J',
            'Post-launch review',
            'Phase J',
            new Date(2023, 8, 19),
            new Date(2023, 8, 21),
            null,
            5,
            'Phase I'
        ],
        [
            'Phase K',
            'Maintenance phase',
            'Phase K',
            new Date(2023, 8, 22),
            new Date(2023, 8, 25),
            null,
            0,
            'Phase J'
        ],
        [
            'Phase L',
            'Project closure',
            'Phase L',
            new Date(2023, 8, 26),
            new Date(2023, 8, 28),
            null,
            0,
            'Phase K'
        ],
        [
            'Phase M',
            'Final documentation',
            'Phase M',
            new Date(2023, 8, 29),
            new Date(2023, 8, 30),
            null,
            0,
            'Phase L'
        ]
    ];

    const trackHeight = 40;
    const paddingHeight = 50;

    // Calculate chart height dynamically based on the number of tasks
    const chartHeight = data.length * trackHeight + paddingHeight;

    const options = {
        height: chartHeight,
        gantt: {
            trackHeight: 40,
            criticalPathEnabled: false,
            innerGridHorizLine: {
                stroke: '#e0e0e0',
                strokeWidth: 1
            },
            labelStyle: {
                fontName: 'Arial',
                fontSize: 16,
                color: '#000'
            }
        }
    };

    return (
        <Box
            p={8}
            minW={1000}>
            <Chart
                chartType='Gantt'
                width='100%'
                data={data}
                options={options}
            />
        </Box>
    );
};
