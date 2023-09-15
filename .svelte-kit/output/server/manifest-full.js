export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.711721ab.js","app":"_app/immutable/entry/app.fade68e8.js","imports":["_app/immutable/entry/start.711721ab.js","_app/immutable/chunks/index.b444ee7f.js","_app/immutable/chunks/singletons.b08c6666.js","_app/immutable/chunks/index.fab11320.js","_app/immutable/entry/app.fade68e8.js","_app/immutable/chunks/index.b444ee7f.js"],"stylesheets":[],"fonts":[]},
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
