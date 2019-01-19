workflow "New workflow" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  args = "publish --access public"
  secrets = [
    "NPM_AUTH_TOKEN",
    "GITHUB_TOKEN",
  ]
}
