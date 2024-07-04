import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";



const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://jolycky.github.io";
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;
// When you're building your site in local or in CI, you could just set your URL manually
if (isBuild) {
  BASE_URL = LIVE_URL;
}

// https://astro.build/config
export default defineConfig({
	server: { port: SERVER_PORT },
  	site: BASE_URL,
	integrations: [tailwind()],
});