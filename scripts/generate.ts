import { fromVault } from 'fumadocs-obsidian';

const vaultDir = process.env.VAULT_DIR;

if (!vaultDir) {
  console.error("ENV:", process.env);
  throw new Error("VAULT_DIR is not defined");
}

console.log("Using vault:", JSON.stringify(process.env.VAULT_DIR));

await fromVault({
  dir: vaultDir,
  out: {
    contentDir: `./content/docs`,
  },
});