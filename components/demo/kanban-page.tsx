'use client';

import {
    Badge,
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    HStack,
    Select,
    Text,
    Textarea,
    useDisclosure,
    VStack
} from '@chakra-ui/react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export const KanbanPage = ({ columns, users }) => {
    const [kanbanColumns, setKanbanColumns] = useState(columns);
    const [isEditing, setIsEditing] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = useRef<any>(null);

    const [newTask, setNewTask] = useState<any>({});

    const resetNewTaskState = (task: any = null) => {
        console.log(task);
        setNewTask({
            content: '',
            priority: 'Medium',
            columnId: kanbanColumns[0]?.id || 0,
            ...task,
            assignedUsers: task.assignedUsers?.length > 0 ? task.assignedUsers : []
        });
    };

    const getUserInitials = user => {
        if (!user || !user.name) return 'U';
        const { name } = user;
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    const handleInputChange = e => {
        const { name, value, files } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleAddTask = () => {
        const updatedColumns = kanbanColumns.map(col => {
            if (col.id === parseInt(newTask.columnId)) {
                return {
                    ...col,
                    tasks: isEditing
                        ? col.tasks.map(task => (task.id === newTask.id ? { ...newTask } : task))
                        : [
                              ...col.tasks,
                              {
                                  ...newTask,
                                  id: Date.now(),
                                  attachment: newTask.attachment
                              }
                          ]
                };
            }
            return col;
        });

        setKanbanColumns(updatedColumns);
        onClose();
        setIsEditing(false);
    };

    const onDragEnd = result => {
        const { destination, source } = result;

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

    const renderTask = task => {
        const assignedUser = task.assignedUsers[0];

        return (
            <Box
                p={4}
                bg='white'
                borderRadius='md'
                boxShadow='sm'
                mb={4}
                border='1px solid'
                borderLeft='6px solid'
                borderColor={
                    task.priority === 'High'
                        ? 'red.500'
                        : task.priority === 'Medium'
                          ? 'yellow.500'
                          : 'green.500'
                }
                onClick={() => {
                    resetNewTaskState(task);
                    setIsEditing(true);
                    onOpen();
                }}
                cursor='pointer'>
                <Text
                    fontSize='md'
                    fontWeight='semibold'>
                    {task.content}
                </Text>
                <Flex
                    mt={2}
                    justifyContent='space-between'>
                    <HStack spacing={4}>
                        <Badge
                            colorScheme={
                                task.priority === 'High'
                                    ? 'red'
                                    : task.priority === 'Medium'
                                      ? 'yellow'
                                      : 'green'
                            }>
                            {task.priority} Priority
                        </Badge>
                    </HStack>
                    <HStack spacing={2}>
                        {assignedUser && (
                            <Box
                                key={assignedUser.user?.id}
                                w='32px'
                                h='32px'
                                bg='blue.400'
                                color='white'
                                borderRadius='full'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                fontSize='sm'
                                fontWeight='bold'>
                                {getUserInitials(assignedUser.user)}
                            </Box>
                        )}
                    </HStack>
                </Flex>
            </Box>
        );
    };

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
                        size='sm'
                        onClick={() => {
                            resetNewTaskState({ columnId: column.id });
                            setIsEditing(false);
                            onOpen();
                        }}>
                        Add task
                    </Button>
                </VStack>
            )}
        </Droppable>
    );

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Box
                    p={8}
                    minH='100vh'
                    minW={1000}>
                    <Flex justifyContent='space-between'>{kanbanColumns.map(renderColumn)}</Flex>
                </Box>
            </DragDropContext>

            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Add a new task</DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={4}>
                            <Box w='100%'>
                                <Text
                                    mb={1}
                                    fontWeight='medium'>
                                    Task Content
                                </Text>
                                <Textarea
                                    ref={firstField}
                                    placeholder='Task Content'
                                    name='content'
                                    value={newTask.content}
                                    onChange={handleInputChange}
                                    resize='vertical'
                                />
                            </Box>

                            <Box w='100%'>
                                <Text
                                    mb={1}
                                    fontWeight='medium'>
                                    Priority
                                </Text>
                                <Select
                                    placeholder='Select priority'
                                    name='priority'
                                    value={newTask.priority}
                                    onChange={handleInputChange}>
                                    <option value='High'>High</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Low'>Low</option>
                                </Select>
                            </Box>

                            <Box w='100%'>
                                <Text
                                    mb={1}
                                    fontWeight='medium'>
                                    Assign Users
                                </Text>
                                <Select
                                    placeholder='Select users'
                                    name='assignedUsers'
                                    value={newTask?.assignedUsers ? newTask?.assignedUsers[0]?.user?.id : ''}
                                    onChange={e => {
                                        const selectedUser = users.find(
                                            user => user.id === parseInt(e.target.value)
                                        );
                                        setNewTask(prevTask => ({
                                            ...prevTask,
                                            assignedUsers: selectedUser ? [{ user: selectedUser }] : []
                                        }));
                                    }}>
                                    {users.map(user => (
                                        <option
                                            key={user.id}
                                            value={user.id}>
                                            {user.name}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            variant='outline'
                            mr={3}
                            onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme='blue'
                            onClick={handleAddTask}
                            isDisabled={!newTask.content}>
                            Save
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
