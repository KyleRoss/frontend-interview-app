# Octave Frontend Interview App
This repository contains a skeleton Vite + React application used for our on-site interview. Please clone and install the required dependencies before your interview.


## Requirements
- Node.js v22+
- npm (comes with Node.js)
- Your favorite code editor (VSCode is recommended)
- A fully set-up development environment

## Knowledge Requirements

- Advanced JavaScript + Basic TypeScript
- React, functional components, hooks, etc.
- API fetching and parsing
- HTML + DOM interactions

### Nice to Know

- TailwindCSS
- React performance best practices


## Setup
Open terminal to the location you clone repositories to and run the following commands:

```shell
git clone https://github.com/KyleRoss/frontend-interview-app.git
cd frontend-interview-app
npm install
```

This will clone this repository and install the necessary dependencies.


## Running the Application
To run the application in development mode, run the following command:

```
npm start
```

This will start the application at http://localhost:3000.

## Application Structure

- `src`
  - `api` — Functions to call API endpoints and retrieve the data.
  - `components` — Place for reusable components.
  - `layouts` — The layouts used in the application (you do not need to touch this).
  - `pages` — All pages in the application (only one for this project).

Your focus during this project will be on the `api` and `pages` folders (and maybe the `components` folder).

## Project Instructions

The instructions for this project will be provided to you during the interview.

> [!IMPORTANT]
>
> Please do not make any code changes before the interview!


## Data Source API
You will be using the following API to fetch the data for the application:

https://dummyjson.com/c/4a70-0a45-4827-a0e4


## Available Scripts

In this project, you can run the following scripts:

| Script           | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| npm start        | Runs the app in the development mode.                        |
| npm run build    | Builds the app for production to the `dist` folder.          |
| npm run serve    | Serves the production build from the `dist` folder.          |
| npm run test     | Execute the unit tests for the app.                          |
| npm run lint     | Run ESLint on all of the files for the app.                  |
| npm run tsc      | Run the TypeScript Compiler for the app to check for typing issues. |
| npm run validate | Runs multiple scripts to validate the project.               |

## Completion

Upon completing the project, please run `npm run validate` to ensure there are no failing tests or linting issues.
