# Modern Job Portal

A job platform built with Next.js (App Router) and Storyblok Headless CMS. This application features dynamic content rendering, real-time filtering via datasources, and full-text search capabilities.

## Live Demo & Repository

* Live Application: [View on Vercel]()
* Source Code: [View on GitHub](https://github.com/desireestrand/jobbportal)

## Technology Stack

* Frontend: Next.js (App Router, Server Components)
* CMS & Content Management: Storyblok (Headless CMS)
* Styling & UI: Tailwind CSS
* Deployment & Hosting: Vercel

## Key Features

* Headless Architecture: Fully decoupled frontend consuming structured content models (job-post) and datasources from Storyblok.
* Dynamic Routing & Detail Views: Dedicated, SEO-friendly detail pages (/jobs/[slug]) powered by rich-text rendering and robust 404 fallback handling.
* Advanced Toolbar & Filtering: 
  * Department-based filtering utilizing Storyblok datasources and filter_query.
  * Real-time free-text search functionality using search_term.
  * URL-state persistence (GET parameters ensure filters and search queries work seamlessly together).
* Modular Component Design: Reusable nested blocks for toolbars, headers, footers, and listing overviews.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
   cd YOUR-REPO

2. Install dependencies:
   npm install

3. Configure environment variables:
   Create a .env.local file in the root directory and add your Storyblok Delivery API token:
   STORYBLOK_DELIVERY_API_TOKEN=your_token_here

4. Run the development server:
   npm run dev

5. Open http://localhost:3000/ in your browser.

## Architecture Overview

* src/app/jobs/page.jsx – Handles index data fetching and passes search parameters down to components.
* src/app/jobs/[slug]/page.jsx – Dynamically fetches and renders individual job postings.
* src/components/ – Modular Storyblok components (Job listings, toolbars, content blocks).
