export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.271000d5.js","app":"_app/immutable/entry/app.2ff337aa.js","imports":["_app/immutable/entry/start.271000d5.js","_app/immutable/chunks/index.4fffd780.js","_app/immutable/chunks/singletons.7ecbd4b8.js","_app/immutable/chunks/index.3985f6a2.js","_app/immutable/entry/app.2ff337aa.js","_app/immutable/chunks/index.4fffd780.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
