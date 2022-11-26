#!/usr/bin/env bash
. "$(dirname -- "$0")/_/husky.sh"
bash ./.husky/branch-check
npx lint-staged