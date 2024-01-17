// 三斜线
/**
 * description
 */
/// <reference>
/// <reference types="vite/client" />
declare module '*.vue' {

	import { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}