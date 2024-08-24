'use client';

import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { Badge, Box, Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { FaComments, FaPaperclip, FaPlus } from 'react-icons/fa';
import { useState } from 'react';

export const KanbanPage = ({ columns }) => {
    const [kanbanColumns, setKanbanColumns] = useState(columns);

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const startColumn = kanbanColumns.find(col => col.id === parseInt(source.droppableId));
        const finishColumn = kanbanColumns.find(col => col.id === parseInt(destination.droppableId));

        if (startColumn === finishColumn) {
            const newTaskIds = Array.from(startColumn.tasks);
            const [movedTask] = newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, movedTask);

            const newColumns = kanbanColumns.map(col => {
                if (col.id === startColumn.id) {
                    return { ...col, tasks: newTaskIds };
                }
                return col;
            });

            setKanbanColumns(newColumns);
            return;
        }

        const startTaskIds = Array.from(startColumn.tasks);
        const [movedTask] = startTaskIds.splice(source.index, 1);
        const finishTaskIds = Array.from(finishColumn.tasks);
        finishTaskIds.splice(destination.index, 0, movedTask);

        const newColumns = kanbanColumns.map(col => {
            if (col.id === startColumn.id) {
                return { ...col, tasks: startTaskIds };
            }
            if (col.id === finishColumn.id) {
                return { ...col, tasks: finishTaskIds };
            }
            return col;
        });

        setKanbanColumns(newColumns);
    };

    const renderTask = task => (
        <Box
            p={4}
            bg='white'
            borderRadius='md'
            boxShadow='sm'
            mb={4}
            border='1px solid'
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

    const renderColumn = column => (
        <Droppable
            droppableId={column.id.toString()}
            key={column.id}>
            {provided => (
                <VStack
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    bg='#fff'
                    p={4}
                    mx={4}
                    borderRadius='md'
                    w='300px'
                    minH='500px'
                    borderTop={`4px solid ${column.color}`}
                    borderRight={`solid 1px #CECECF`}
                    borderLeft={`solid 1px #CECECF`}
                    borderBottom={`solid 1px #CECECF`}
                    boxShadow={`0 1px 2px 1px rgb(200 200 200)`}>
                    <Heading
                        size='md'
                        color={column.color}>
                        {column.title}
                    </Heading>
                    {column.tasks.map((task, index) => (
                        <Draggable
                            key={task.id}
                            draggableId={task.id.toString()}
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
                <Flex justifyContent='space-between'>{kanbanColumns.map(renderColumn)}</Flex>
            </Box>
        </DragDropContext>
    );
};
