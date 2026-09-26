

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": true
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Dx0O80u6.js","_app/immutable/chunks/CAUQWqgP.js","_app/immutable/chunks/CLCxexPg.js","_app/immutable/chunks/BheT6vQR.js","_app/immutable/chunks/C8ATc6vJ.js"];
export const stylesheets = ["_app/immutable/assets/0.D0RVnjhK.css"];
export const fonts = [];
