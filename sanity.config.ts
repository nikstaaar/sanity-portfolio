import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  projectId: "x08d25d5",
  dataset: "production",
  title: "Sanity Portfolio",
  apiVersion: "2024-05-27",
  basePath: "/admin",
  plugins: [structureTool()],
});
