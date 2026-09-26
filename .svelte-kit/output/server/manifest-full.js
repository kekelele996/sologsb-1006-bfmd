export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.wPkl-GSN.js",app:"_app/immutable/entry/app.CVDArko5.js",imports:["_app/immutable/entry/start.wPkl-GSN.js","_app/immutable/chunks/D8rviIE_.js","_app/immutable/chunks/CLCxexPg.js","_app/immutable/chunks/BjSdJ3nn.js","_app/immutable/entry/app.CVDArko5.js","_app/immutable/chunks/CLCxexPg.js","_app/immutable/chunks/COylGAri.js","_app/immutable/chunks/CAUQWqgP.js","_app/immutable/chunks/BjSdJ3nn.js","_app/immutable/chunks/BhETMui_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
