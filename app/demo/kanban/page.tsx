import { KanbanPage } from '@/components/demo/kanban-page';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getKanbanData = async () => {
    const columns = await prisma.kanbanColumn.findMany({
        include: {
            tasks: {
                include: {
                    assignedUsers: {
                        include: {
                            user: true
                        }
                    }
                }
            }
        }
    });

    const users = await prisma.user.findMany();

    return { columns, users };
};

export default async function Page() {
    const { columns, users } = await getKanbanData();
    return (
        <KanbanPage
            columns={columns}
            users={users}
        />
    );
}
