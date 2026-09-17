# Lifesigns Pretest

A modern web application built with **Vue 3**, **TypeScript**, **Frappe UI**, **Tailwind CSS v3**, and **Vite**.

## 🛠️ Tech Stack

- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Language:** TypeScript
- **UI Component Library:** [Frappe UI](https://frappeui.com/)
- **Router:** Vue Router 4 (configured under base path `/frontend`)
- **Styling:** Tailwind CSS v3 & PostCSS
- **Build Tool:** Vite 8

---

## 🛠️ Step-by-Step Project Setup from Scratch

Follow these steps to create and configure this project from scratch:

### 1. Initialize Vite Project with Vue + TypeScript

```bash
npm create vite@latest lifesigns-pretest -- --template vue-ts
cd lifesigns-pretest
```

### 2. Install Project Dependencies

Install **Frappe UI** and **Vue Router**:
```bash
npm install frappe-ui vue-router
```

Install **Tailwind CSS v3**, **PostCSS**, and **Autoprefixer** as dev dependencies:
```bash
npm install -D tailwindcss@^3.4.19 postcss autoprefixer
```

### 3. Configure Tailwind CSS v3 & Frappe UI Preset

1. Generate PostCSS and Tailwind configuration files:
   ```bash
   npx tailwindcss init -p
   ```

2. Update `tailwind.config.js` to include the `frappe-ui` preset and content paths:
   ```js
   import frappePreset from "frappe-ui/tailwind";

   /** @type {import('tailwindcss').Config} */
   export default {
     presets: [frappePreset],
     content: [
       "./index.html",
       "./src/**/*.{vue,js,ts,jsx,tsx}",
       "./node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           primary: {
             DEFAULT: "#831CF7",
             dark: "#5B16C9",
             light: "#EDE3FF",
           },
           secondary: {
             DEFAULT: "#B435ED",
             light: "#F5EAFE",
           },
           accent: "#7C3AED",
           success: "#16A34A",
           warning: "#F59E0B",
           error: "#DC2626",
           info: "#4F46E5",
         },
       },
     },
   };
   ```

3. Import Frappe UI styles and Tailwind directives in `src/style.css`:
   ```css
   @import 'frappe-ui/style.css';
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### 4. Configure `vite.config.ts`

Add the `frappe-ui` Vite plugin and setup `optimizeDeps` for `frappe-ui` sub-dependencies to avoid dynamic pre-bundling network resets during development:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import frappeui from 'frappe-ui/vite'

export default defineConfig({
	plugins: [
		frappeui({
			frontendRoute: '/frontend',
		}),
		vue(),
	],

	server: {
		host: '127.0.0.1',
		port: 8080,
	},

	build: {
		target: 'es2022',
	},

	optimizeDeps: {
		include: [
			'echarts',
			'grid-layout-plus',
			'@tanstack/vue-virtual',
			'@headlessui/vue',
			'@floating-ui/dom',
			'@floating-ui/vue',
			'@popperjs/core',
			'reka-ui',
			'feather-icons',
			'dayjs',
			'dompurify',
			'lowlight',
			'highlight.js',
			'highlight.js/lib/core',
			'interactjs',
			'socket.io-client',
			'tippy.js',
			'frappe-ui',
		],
	},
})
```

### 5. Configure Vue Router (`src/router.ts`)

Create `src/router.ts`:

```ts
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory("/frontend"),

  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./pages/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./pages/Login.vue"),
    },
  ],
});
```

### 6. Create TypeScript Declarations (`src/env.d.ts`)

Create `src/env.d.ts` to declare types for `.vue` components and `frappe-ui`:

```ts
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'frappe-ui'
declare module 'frappe-ui/vite'
```

### 7. Update Application Entry (`src/main.ts`)

Update `src/main.ts` to mount the Vue application with Vue Router:

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

---

## 🚀 Running the Project

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server on `http://127.0.0.1:8080` |
| `npm run build` | Builds the application for production into the `dist/` directory |
| `npm run preview` | Previews the production build locally |

### Starting Development Server

```bash
npm run dev
```

> **Note on Vite Cache:** If you encounter dependency pre-bundling issues after adding new packages, clear the Vite cache and start with `--force`:
> ```bash
> rm -rf node_modules/.vite
> npm run dev -- --force
> ```

---

## 📁 Project Structure

```text
lifesigns-pretest/
├── src/
│   ├── assets/          # Static assets and fonts
│   ├── components/      # Reusable Vue components
│   ├── pages/           # Application views (Home.vue, Login.vue)
│   ├── App.vue          # Root component
│   ├── env.d.ts         # TypeScript environment & module declarations
│   ├── main.ts          # Application entry point
│   ├── router.ts        # Vue Router configuration
│   └── style.css        # Global styles & Tailwind imports
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration for Tailwind CSS
├── tailwind.config.js   # Tailwind CSS configuration with Frappe UI preset
├── tsconfig.app.json    # TypeScript compiler configuration for application
├── tsconfig.json        # Root TypeScript configuration
└── vite.config.ts       # Vite configuration (plugins, server host, optimizeDeps)
```
