'use client';
import { Badge, Box, Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useState } from 'react';
import { FaComments, FaPaperclip, FaPlus } from 'react-icons/fa';

const initialTasks = {
    backlog: [
        {
            id: '1',
            content: 'Market research for new product launch.',
            priority: 'Medium',
            comments: 2,
            attachments: 3,
            assignedTo: ['Alice']
        },
        {
            id: '2',
            content: 'Develop wireframes for the new mobile app.',
            priority: 'High',
            comments: 4,
            attachments: 2,
            assignedTo: ['Bob', 'Claire']
        },
        {
            id: '3',
            content: 'Draft initial project plan for Q4.',
            priority: 'Low',
            comments: 1,
            attachments: 1,
            assignedTo: ['David']
        }
    ],
    inProgress: [
        {
            id: '4',
            content: 'Refine user personas based on feedback.',
            priority: 'High',
            comments: 3,
            attachments: 1,
            assignedTo: ['Eve']
        },
        {
            id: '5',
            content: 'Create marketing strategy for holiday campaign.',
            priority: 'Medium',
            comments: 2,
            attachments: 3,
            assignedTo: ['Frank']
        }
    ],
    review: [
        {
            id: '6',
            content: 'Finalize landing page design.',
            priority: 'Low',
            comments: 2,
            attachments: 2,
            assignedTo: ['Grace']
        },
        {
            id: '7',
            content: 'Proofread blog posts for SEO optimization.',
            priority: 'Medium',
            comments: 1,
            attachments: 1,
            assignedTo: ['Hank']
        }
    ],
    done: [
        {
            id: '8',
            content: 'Launch email marketing campaign for summer sale.',
            priority: 'High',
            comments: 5,
            attachments: 2,
            assignedTo: ['Isabel']
        },
        {
            id: '9',
            content: 'Complete user testing for new feature.',
            priority: 'Low',
            comments: 3,
            attachments: 4,
            assignedTo: ['Jack']
        }
    ]
};
export const KanbanPage = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const start = tasks[source.droppableId];
        const finish = tasks[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start);
            const [movedTask] = newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, movedTask);

            const newState = {
                ...tasks,
                [source.droppableId]: newTaskIds
            };

            setTasks(newState);
            return;
        }

        const startTaskIds = Array.from(start);
        const [movedTask] = startTaskIds.splice(source.index, 1);
        const finishTaskIds = Array.from(finish);
        finishTaskIds.splice(destination.index, 0, movedTask);

        const newState = {
            ...tasks,
            [source.droppableId]: startTaskIds,
            [destination.droppableId]: finishTaskIds
        };

        setTasks(newState);
    };

    const renderTask = task => (
        <Box
            p={4}
            bg='white'
            borderRadius='md'
            boxShadow='sm'
            mb={4}
            borderLeft='6px solid'
            borderColor={
                task.priority === 'High' ? 'red.500' : task.priority === 'Medium' ? 'yellow.500' : 'green.500'
            }>
            <Text
                fontSize='md'
                fontWeight='semibold'>
                {task.content}
            </Text>
            <Flex mt={2}>
                <HStack spacing={4}>
                    <Badge
                        colorScheme={
                            task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'yellow' : 'green'
                        }>
                        {task.priority} Priority
                    </Badge>
                    <HStack spacing={1}>
                        <FaComments />
                        <Text fontSize='sm'>{task.comments}</Text>
                    </HStack>
                    <HStack spacing={1}>
                        <FaPaperclip />
                        <Text fontSize='sm'>{task.attachments}</Text>
                    </HStack>
                </HStack>
            </Flex>
        </Box>
    );

    const renderColumn = (columnId, tasks, title, color) => (
        <Droppable droppableId={columnId}>
            {provided => (
                <VStack
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    bg='gray.50'
                    p={4}
                    mx={4}
                    borderRadius='md'
                    w='300px'
                    minH='500px'
                    borderTop={`4px solid ${color}`}
                    borderRight={`solid 1px #CECECF`}
                    borderLeft={`solid 1px #CECECF`}
                    borderBottom={`solid 1px #CECECF`}
                    boxShadow={`0 1px 2px 1px rgb(200 200 200)`}>
                    <Heading
                        size='md'
                        color={color}>
                        {title}
                    </Heading>
                    {tasks.map((task, index) => (
                        <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}>
                            {provided => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    w='100%'>
                                    {renderTask(task)}
                                </Box>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    <Button
                        leftIcon={<FaPlus />}
                        colorScheme='teal'
                        variant='ghost'
                        size='sm'>
                        Add task
                    </Button>
                </VStack>
            )}
        </Droppable>
    );

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Box
                p={8}
                minH='100vh'
                minW={1000}>
                <Flex justifyContent='space-between'>
                    {renderColumn('backlog', tasks.backlog, 'Backlog', '#424242')}
                    {renderColumn('inProgress', tasks.inProgress, 'In Progress', '#7559B3')}
                    {renderColumn('review', tasks.review, 'Review', '#1779BA')}
                    {renderColumn('done', tasks.done, 'Complete', '#61DA96')}
                </Flex>
            </Box>
        </DragDropContext>
    );
};
