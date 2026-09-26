# FitLog

A responsive workout library for browsing exercises, planning a session, and saving lifts for later.

## Technologies

Next.js App Router, React, TypeScript, Tailwind CSS, Lucide icons, and React Hot Toast.

## Features

- API-backed workout library with exercise details and instructions.
- Search the library and your plan by workout name or muscle-group tag.
- Today's Plan and Saved tabs with live navigation counters and plan totals.
- Add up to five active lifts; completed lifts stay visible and free a slot for another exercise.
- Save, remove, and complete workouts with toast feedback and duplicate protection.
- Sort each plan list by duration or calories (ascending), or rating (highest first).
- Browser-local persistence across reloads, with synchronization between open tabs.
- Responsive layouts, loading indicators, retry screens, and invalid-workout 404 pages.

## Run locally

Requires Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No API keys or environment variables are required.

```bash
npm run lint
npm test
npm run build
npm start
```

Deploy to a Node.js hosting service supporting Next.js, using `npm run build` and `npm start` (or the platform's Next.js preset). This project requires a Next.js server; it is not a static export.

## Data and behavior

Workouts are fetched from https://api.abcz.workers.dev/api/fitlog and `/api/fitlog/:id`. The server needs access to this API and Google Fonts during builds; workout images load from `img.magnific.com`.

Plan and Saved data use the browser's `fitlog-plan-v1` localStorage key. They belong to that browser, with no account or cross-device synchronization. Metrics and Plan badges count all planned workouts, including completed ones. Only unfinished workouts count toward the five-lift cap. The plan persists until you remove entries; there is no automatic midnight reset.
