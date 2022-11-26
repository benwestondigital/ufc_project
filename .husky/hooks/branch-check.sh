#!/usr/bin/env bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
REGEX="^((fix|feat)\/[a-zA-Z0-9\-]+)$"


if ! [[$BRANCH =~ $REGEX]]; then
  echo "Your commit was rejected due to branching name"
  echo "Please rename your branch with $REGEX syntax"
  echo "Example 'fix/branchname' - you can rename a branch using 'git branch -m new-branch-name'"
  exit 1
fi