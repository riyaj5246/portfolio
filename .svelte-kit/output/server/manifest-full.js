export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.911aacb8.js","app":"_app/immutable/entry/app.16b58f5a.js","imports":["_app/immutable/entry/start.911aacb8.js","_app/immutable/chunks/index.4fffd780.js","_app/immutable/chunks/singletons.06e0644f.js","_app/immutable/chunks/index.3985f6a2.js","_app/immutable/entry/app.16b58f5a.js","_app/immutable/chunks/index.4fffd780.js"],"stylesheets":[],"fonts":[]},
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
