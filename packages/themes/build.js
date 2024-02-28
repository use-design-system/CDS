import run from "@lsj/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
