#!/usr/bin/env bash

LAST_TAG="$1"

>&2 echo "Checking LAST_TAG $LAST_TAG against HEAD, changes:"

if git log "$LAST_TAG..HEAD" --grep "BREAKING CHANGE" | grep "BREAKING CHANGE" > /dev/null; then
  >&2 echo "Found a commit with breaking changes"
  >&2 git log "$LAST_TAG..HEAD" --grep "BREAKING CHANGE" --oneline
  echo "major"
elif ! git diff "$LAST_TAG..HEAD" --quiet -- sprite_icons illustrations build_scripts/file_icons_version src/file_icon_map.js; then
  # Non-zero exit code means there were differences/changes.
  >&2 git diff "$LAST_TAG..HEAD" --name-only -- sprite_icons illustrations build_scripts/file_icons_version src/file_icon_map.js
  echo "minor"
elif git log "$LAST_TAG..HEAD" --grep "^fix:" --no-merges --format=%s | grep "^fix:" > /dev/null; then
  echo "patch"
else
  >&2 echo "No changes"
fi

exit 0
