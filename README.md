# ProjectPulse

A project management dashboard built with Next.js 14, Chakra UI, and Prisma. It has an analytics dashboard, a drag-and-drop Kanban board, and a Gantt chart timeline, all backed by a PostgreSQL database.

**[Live Demo →](https://projectpulse-pro.vercel.app/)**

## Features

### Analytics Dashboard

KPI cards plus charts for user engagement, revenue (MRR and ARPU), churn, API response times, server uptime and revenue breakdown. Each chart is built with Chart.js through `react-chartjs-2`.

![Dashboard](docs/images/dashboard.png)

### Kanban Board

Backlog, In Progress, Review and Complete columns. Each task card shows a color-coded priority, its assignees and a status color. You can drag cards between columns (built with `@hello-pangea/dnd`).

![Kanban board](docs/images/kanban.png)

### Gantt Chart

A project timeline that shows task dependencies, durations and how far along each task is. It uses Google Charts through `react-google-charts`.

![Gantt chart](docs/images/gantt.png)

### Responsive Layout

On small screens the sidebar collapses into a menu button, and every view adapts to fit. Hover over a Gantt task to see its dates, duration, progress and resource.


## Tech Stack

| Layer         | Technology                                                 |
| ------------- | ---------------------------------------------------------- |
| Framework     | [Next.js 14](https://nextjs.org/) (App Router, React 18)   |
| UI            | [Chakra UI](https://chakra-ui.com/), Emotion, Framer Motion |
| Charts        | [Chart.js](https://www.chartjs.org/), Google Charts        |
| Drag and drop | [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)   |
| Database      | PostgreSQL with [Prisma](https://www.prisma.io/) ORM       |
| Language      | TypeScript                                                 |
| Hosting       | [Vercel](https://vercel.com/)                              |

## Project Structure

```
app/
  demo/
    dashboard/      # Analytics dashboard (server component, reads from Prisma)
    kanban/         # Kanban board (server component, reads from Prisma)
    gantt-chart/    # Gantt timeline
  layout.tsx        # Root layout + Chakra providers
  page.tsx          # Landing page
components/
  demo/             # Client-side page components (charts, board, timeline)
  header/ nav/      # App shell: top bar and sidebar navigation
  home/             # Landing page sections
prisma/
  schema.prisma     # Data models (metrics, revenue, performance, Kanban)
  migrations/       # SQL migrations
  seed.ts           # Demo data
```

## Getting Started

### Prerequisites

- Node.js 18+
- A PostgreSQL database (local, Docker, or hosted)

### Setup

1. **Clone and install**

    ```bash
    git clone https://github.com/stevehetz/project-pulse.git
    cd project-pulse
    npm install
    ```

2. **Configure the database.** Create a `.env.local` file in the project root:

    ```bash
    DATABASE_URL="postgresql://user:password@localhost:5432/projectpulse"
    ```

3. **Create the tables and load the demo data**

    ```bash
    npm run local:db:migrate init
    npm run local:db:seed
    ```

4. **Start the dev server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000).

### Database Scripts

| Script                           | Description                                |
| -------------------------------- | ------------------------------------------ |
| `npm run local:db:migrate <name>` | Create and apply a migration locally       |
| `npm run local:db:reset`          | Drop and recreate the local database       |
| `npm run local:db:seed`           | Load demo data into the local database     |
| `npm run vercel:db:deploy`        | Apply migrations to the hosted database    |
| `npm run vercel:db:seed`          | Load demo data into the hosted database    |
| `npm run vercel:db:rollback`      | Mark a failed migration as rolled back     |

## Deployment (Vercel)

1. Import the repo into Vercel and add a Postgres database. Prisma Postgres or Neon from the Vercel Marketplace both have free tiers. Make sure the project has a `DATABASE_URL` environment variable containing the plain `postgres://` connection string.
2. Locally, create a `.env.dev` file (it's gitignored) with the same `DATABASE_URL`, then create the tables and load the demo data:

    ```bash
    npm run vercel:db:deploy
    npm run vercel:db:seed
    ```

3. Deploy. The demo pages are rendered when the site builds, so **redeploy after changing data in the database** to see the changes.
