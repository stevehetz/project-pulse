import { KanbanPage } from '@/components/demo/kanban-page';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getKanbanData = async () => {
    // Fetching all columns with their tasks and assigned users
    const columns = await prisma.kanbanColumn.findMany({
        include: {
            tasks: {
                include: {
                    assignedUsers: {
                        include: {
                            user: true // Include the user details
                        }
                    }
                }
            }
        }
    });

    return columns;
};

export default async function Page() {
    const columns = await getKanbanData();
    return <KanbanPage columns={columns} />;
}
