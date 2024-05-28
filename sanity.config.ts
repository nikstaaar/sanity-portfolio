import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

export default defineConfig({
  projectId: "x08d25d5",
  dataset: "production",
  title: "Sanity Portfolio",
  apiVersion: "2024-05-27",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});
