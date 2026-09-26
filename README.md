<div align="center">
  <img src="public/images/logo.png" alt="FitLog logo" width="48" />
  <h1>FitLog</h1>
  <p><strong>Train with intent. Log every set.</strong></p>
  <p>A workout library and personal session planner, built for mobile, tablet, and desktop.</p>
  <p><a href="#key-features">Features</a> · <a href="#technologies">Technologies</a> · <a href="#getting-started">Getting started</a></p>
</div>

---

## About

FitLog helps you explore exercises, understand each lift, and build a focused workout session. Browse the dark-themed library, add workouts to today's plan, and save exercises for later. Your plan stays available when you reload the page.

## Key features

1. **Explore the workout library** — Browse API-backed exercises with images, muscle-group tags, equipment, stats, and step-by-step instructions.
2. **Build today's plan** — Add up to five active lifts, mark exercises as done, and remove entries. Live counters and exercise, minute, and calorie totals keep your session visible. Completing a lift frees a slot.
3. **Save workouts for later** — Keep a separate Saved list, open exercise details, and manage entries with duplicate protection and toast feedback.
4. **Search and sort** — Find workouts by name or muscle-group tag in the library and plan. Sort plan lists by duration, calories, or rating.
5. **Keep your progress across reloads** — Plan, Saved, and completion data persist in localStorage and synchronize between open tabs in the same browser.

## Technologies

| Technology      | Purpose                                                    |
| --------------- | ---------------------------------------------------------- |
| Next.js 16      | App Router, page navigation, and server-side data fetching |
| React 19        | Components and interactive UI                              |
| TypeScript      | Typed workout data and application logic                   |
| Tailwind CSS 4  | Responsive layouts and styling                             |
| Lucide React    | Interface icons                                            |
| React Hot Toast | Action feedback and notifications                          |
| localStorage    | Browser-local plan and saved-workout persistence           |

## Concepts used

- **Components and props:** Headers, workout cards, metrics, and buttons receive the data they display.
- **Context API and useState:** `src/context/PlanContext.tsx` shares plan, saved workouts, and completion state across pages. Buttons call named event handlers directly.
- **useEffect:** Restores localStorage data after mounting and listens for changes from other browser tabs, with listener cleanup on unmount.
- **Event handling and JSON:** Add, save, complete, and remove handlers update state and persist the updated data with `JSON.stringify`. Reloading restores it with `JSON.parse`.
- **Array methods and conditional rendering:** `map`, `filter`, `some`, `includes`, `reduce`, and `sort` power lists, totals, limits, sorting, and empty states.
- **Server/Client Components and routing:** Server Components fetch API data; Client Components handle interactions. `/workout/[id]` uses dynamic routing for exercise details.

## Pages

| Route           | Page                                                 |
| --------------- | ---------------------------------------------------- |
| `/`             | Home, hero, and workout library           |
| `/workout`      | Workout library                                      |
| `/workout/[id]` | Exercise details, instructions, and Add/Save actions |
| `/my-plan`      | Today's Plan and Saved tabs                          |

Loading indicators, error retry screens, and a 404 page cover loading failures and invalid routes.

## Deployment

Deploy to a Node.js hosting service supporting Next.js, using `npm run build` and `npm start` (or the platform's Next.js preset). This project requires a Next.js server; it is not a static export.

## Data and behavior

Workouts come from the [FitLog API](https://api.abcz.workers.dev/api/fitlog); individual exercises use `https://api.abcz.workers.dev/api/fitlog/:id`. The server needs access to this API and Google Fonts during builds; workout images load from `img.magnific.com`.

Plan and Saved data use the browser's `fitlog-plan-v1` localStorage key. They belong to that browser, with no account or cross-device synchronization. Metrics show the exercise count, total minutes, and total calories for the selected Today's Plan or Saved tab. The Plan badge counts all planned workouts, including completed ones. Only unfinished workouts count toward the five-lift cap. The plan persists until you remove entries; there is no automatic midnight reset.

Duration and calories sort from lowest to highest; rating sorts from highest to lowest.
