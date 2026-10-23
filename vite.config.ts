// @lovable.dev/vite-tanstack-config already includes the app's build plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Firebase Hosting uses a pre-rendered static package and the custom server entry.
// Netlify builds a serverless function, so it must not use the Firebase prerender step.
const isNetlifyBuild = process.env.NETLIFY === "true";

export default defineConfig({
  tanstackStart: isNetlifyBuild
    ? {}
    : {
        // Redirect the bundled server entry to src/server.ts for the Firebase build.
        server: { entry: "server" },
        // Generate static HTML so Firebase Hosting can serve the site without an SSR server.
        prerender: {
          enabled: true,
          autoSubfolderIndex: true,
          autoStaticPathsDiscovery: true,
          crawlLinks: true,
          failOnError: true,
        },
      },
});
