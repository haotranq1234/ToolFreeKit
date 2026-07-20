import { spawnSync } from "node:child_process";

const mode = process.argv[2] ?? "build";
const isWindows = process.platform === "win32";

const run = (command, args) => {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: false
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

if (isWindows && mode === "build") {
  run("cmd", ["/c", "npx", "next", "build"]);
  process.exit(0);
}

if (isWindows && mode !== "build") {
  run("cmd", ["/c", "npx", "next", "build"]);
  process.exit(0);
}

if (mode === "build") {
  run("npx", ["opennextjs-cloudflare", "build"]);
} else if (mode === "preview") {
  run("npx", ["opennextjs-cloudflare", "build"]);
  run("npx", ["opennextjs-cloudflare", "preview"]);
} else if (mode === "deploy") {
  run("npx", ["opennextjs-cloudflare", "build"]);
  run("npx", ["opennextjs-cloudflare", "deploy"]);
} else {
  console.error(`Unknown mode: ${mode}`);
  process.exit(1);
}
