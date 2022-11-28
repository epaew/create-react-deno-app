import { esbuild } from "../dev_deps.ts";

const result = await esbuild.build({
  // inputs
  entryPoints: ["src/index.tsx"],
  // outputs
  assetNames: "[ext]/[name].[hash]",
  chunkNames: "[ext]/[name].[hash]",
  entryNames: "[ext]/[name].[hash]",
  outdir: "build/static",
  // others
  bundle: true,
  external: [
    "react",
    "react-dom",
    "web-vitals",
  ],
  format: "esm",
  loader: {
    ".svg": "text",
  },
  metafile: true,
  // minify: true,
  splitting: true,
});
console.log(JSON.stringify(result, null, 2));
Deno.exit();
