module.exports = {
  // Add descriptions in Russian to all types
  types: [
    {
      value: "build",
      name: "build:     Project build or changes to external dependencies",
    },
    { value: "ci", name: "ci:        CI setup and script work" },
    { value: "docs", name: "docs:      Documentation update" },
    { value: "feat", name: "feat:      Adding new functionality" },
    { value: "fix", name: "fix:       Bug fixes" },
    {
      value: "perf",
      name: "perf:      Performance improvements",
    },
    {
      value: "refactor",
      name: "refactor:  Code changes without fixing bugs or adding new features",
    },
    { value: "revert", name: "revert:    Reverting to previous commits" },
    {
      value: "style",
      name: "style:     Code style changes (tabs, indents, commas, etc.)",
    },
    { value: "test", name: "test:      Adding tests" },
  ],

  // Scope. It characterizes the part of the code affected by the changes
  scopes: [
    { name: "home" },
    { name: "timeline" },
    { name: "bank-card" },
    { name: "contacts" },
  ],

  // Ability to set a special SCOPE for a specific type of commit (example for 'fix')
  /*
      scopeOverrides: {
        fix: [
          {name: 'style'},
          {name: 'e2eTest'},
          {name: 'unitTest'}
        ]
      },
      */

  // Change default questions
  messages: {
    type: "What changes are you making?",
    scope: "\nSelect the SCOPE you changed (optional):",
    // Ask if allowCustomScopes is true
    customScope: "Specify your SCOPE:",
    subject: "Write a SHORT description in the IMPERATIVE mood:\n",
    body: 'Write a DETAILED description (optional). Use "|" for a new line:\n',
    breaking: "List of BREAKING CHANGES (optional):\n",
    footer:
      "Place for meta data (tickets, links, etc.). For example: SECRETMRKT-700, SECRETMRKT-800:\n",
    confirmCommit: "Are you satisfied with the resulting commit?",
  },

  // Allow custom SCOPE
  allowCustomScopes: true,

  // Prohibit Breaking Changes
  allowBreakingChanges: false,

  // Prefix for the footer
  footerPrefix: "META DATA:",

  // Limit subject length
  subjectLimit: 72,
};
