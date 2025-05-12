import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "rotar-alex",
  project: "javascript-nextjs",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};


export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)], sentryConfig,
  ssr: {
    noExternal: [/@syncfusion/],
  }
  };
});