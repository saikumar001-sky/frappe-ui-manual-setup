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