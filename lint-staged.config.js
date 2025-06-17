export default {
  '**/*.{ts,tsx,js,jsx}': (stagedFiles) => [
    `eslint --fix . ${stagedFiles.map((f) => `"${f}"`).join(' ')}`,
    `prettier --write ${stagedFiles.map((f) => `"${f}"`).join(' ')}`
  ],
  '**/*.{json,css,md}': (stagedFiles) => [
    `prettier --write ${stagedFiles.map((f) => `"${f}"`).join(' ')}`
  ]
}
