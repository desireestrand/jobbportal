# Job Portal

A full-scale web application designed to help users browse and search for open job positions, featuring dynamic filtering and department categorization. Developed using Next.js and Storyblok CMS.

[Live Demo](https://jobbportal-six.vercel.app/)

## Features
* **Job Post Management:** Fully structured custom Content Type (`job-post`) handling titles, summaries, locations, RichText content, and publication dates.
* **Dynamic List View:** Displays available job listings with department tags, summaries, and direct links to detail views.
* **Detailed Job Views:** Dedicated views for each posting (`/jobs/[slug]`) rendering rich text content with robust error handling for invalid routes.
* **Advanced Toolbar & Filtering:** A dedicated toolbar block supporting department filtering via Storybloks Datasource (`job-departments`) and real-time free-text search.
* **Combined State Handling:** Synchronized query parameters allowing users to filter by department and search simultaneously without losing active filters.

## Technical Implementation
Key technical highlights include:
* **Headless CMS Architecture:** Leveraging Storyblok's Delivery API, Datasources, and Nestable Blocks for modular content management.
* **Server-Driven Routing & State:** Utilizing Next.js App Router and `searchParams` to handle server-side filtering and search queries seamlessly.
* **Global Layout Integration:** Consistent global headers and footers across all pages.

## Tech Stack
* **Frontend:** Next.js (App Router, Server & Client Components)
* **CMS:** Storyblok CMS (Content Types, Datasources, RichText)
* **Styling:** CSS / Modern Styling
* **Deployment & Hosting:** Vercel

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/job-portal.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   Create a `.env.local` file in the root directory and add your token:
   ```env
   STORYBLOK_DELIVERY_API_TOKEN=your_token_here
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
