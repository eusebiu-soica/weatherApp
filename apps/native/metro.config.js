// // Learn more https://docs.expo.io/guides/customizing-metro


const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

config.resolver.disableHierarchicalLookup = true;
config.resolver.assetExts.push('png', 'jpg', 'jpeg', 'gif', 'svg');

config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "cjs",
  "web.js",
  "web.tsx",
];

module.exports = config;

// const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

// // Găsește calea root a monorepo-ului
// const projectRoot = __dirname;
// const workspaceRoot = path.resolve(projectRoot, '../..');

// const config = getDefaultConfig(projectRoot);

// // 1. Adaugă directoarele workspace la watchFolders
// config.watchFolders = [workspaceRoot];

// // 2. Exclude node_modules din workspaceRoot și include doar node_modules din projectRoot
// config.resolver.nodeModulesPaths = [
//   path.resolve(projectRoot, 'node_modules'),
// ];

// // 3. Configurează resolver-ul să transpileze pachetele din workspace
// config.resolver.extraNodeModules = {
//   '@repo/ui': path.resolve(workspaceRoot, 'packages/ui'),
// };

// // 4. Asigură-te că Metro transpilează pachetele din workspace
// const { assetExts, sourceExts } = config.resolver;
// config.resolver.assetExts = assetExts.filter(ext => ext !== 'svg');
// config.resolver.sourceExts = [...sourceExts, 'svg', 'mjs', 'cjs'];

// // 5. Configurează blocklist pentru a evita conflictele de module
// config.resolver.blockList = [
//   // Exclude node_modules din alte pachete workspace
//   new RegExp(`${path.resolve(workspaceRoot, 'apps/web/node_modules')}/.*`),
// ];

// module.exports = config;
