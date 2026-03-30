#!/usr/bin/env node
/**
 * TWA (Trusted Web Activity) Build Script
 * Wraps the PWA into an Android AAB/APK for Google Play Store.
 *
 * Prerequisites:
 *   1. Android Studio + SDK installed (ANDROID_HOME set)
 *   2. Java JDK 11+ installed
 *   3. npm install -g @bubblewrap/cli
 */

import { execSync } from "child_process";
import { existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const TWA_DIR = resolve(ROOT, "android-twa");

const TWA_CONFIG = {
  domain: "khushneel.in",
  url: "https://khushneel.in",
  name: "Khushneel | Full-Stack Developer",
  shortName: "Khushneel",
  themeColor: "#6C63FF",
  backgroundColor: "#0f0f0f",
  packageId: "in.khushneel.app",
  icon: resolve(ROOT, "public/icons/icon-512x512.png"),
  maskableIcon: resolve(ROOT, "public/icons/icon-512x512-maskable.png"),
  splashScreenFadeOutDuration: 300,
  display: "standalone",
  orientation: "portrait",
};

function run(cmd, cwd = ROOT) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

function checkBubblewrap() {
  try {
    execSync("bubblewrap --version", { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

async function main() {
  // 1. Ensure bubblewrap is installed
  if (!checkBubblewrap()) {
    console.log("Installing @bubblewrap/cli globally...");
    run("npm install -g @bubblewrap/cli");
  }

  // 2. Build the PWA first
  console.log("\nBuilding PWA...");
  run("npm run build");

  // 3. Initialise the TWA project (only first time)
  if (!existsSync(TWA_DIR)) {
    console.log("\nInitialising TWA project...");
    run(
      [
        "bubblewrap init",
        `--manifest https://${TWA_CONFIG.domain}/manifest.json`,
        `--directory ${TWA_DIR}`,
      ].join(" "),
    );
  }

  // 4. Build the Android App Bundle (AAB) — required by Play Store
  console.log("\nBuilding Android App Bundle (AAB)...");
  run("bubblewrap build", TWA_DIR);

  console.log("\n✅  Build complete!");
  console.log(`   AAB: ${TWA_DIR}/app-release-bundle.aab`);
  console.log("\nNext steps:");
  console.log("  1. Sign the AAB with your keystore (bubblewrap handles this)");
  console.log("  2. Upload app-release-bundle.aab to Google Play Console");
  console.log("  3. Fill in store listing, screenshots, and publish");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
