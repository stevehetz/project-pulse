-- CreateEnum
CREATE TYPE "KanbanPriority" AS ENUM ('High', 'Medium', 'Low');

-- CreateTable
CREATE TABLE "KanbanTask" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "priority" "KanbanPriority" NOT NULL,
    "comments" INTEGER NOT NULL,
    "attachments" INTEGER NOT NULL,
    "columnId" INTEGER NOT NULL,

    CONSTRAINT "KanbanTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KanbanTaskAssignedUser" (
    "taskId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "KanbanTaskAssignedUser_pkey" PRIMARY KEY ("taskId","userId")
);

-- CreateTable
CREATE TABLE "KanbanColumn" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "KanbanColumn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KanbanTask" ADD CONSTRAINT "KanbanTask_columnId_fkey" FOREIGN KEY ("columnId") REFERENCES "KanbanColumn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KanbanTaskAssignedUser" ADD CONSTRAINT "KanbanTaskAssignedUser_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "KanbanTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KanbanTaskAssignedUser" ADD CONSTRAINT "KanbanTaskAssignedUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
