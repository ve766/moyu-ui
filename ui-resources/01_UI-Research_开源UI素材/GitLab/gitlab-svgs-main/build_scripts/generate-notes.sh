#!/usr/bin/env bash

LAST_TAG="$1"
NEW_TAG="$2"

function svg_type() {
  if [[ $1 == "sprite_icons"* ]]; then
    echo "icon"
  elif [[ $1 == "illustrations"* ]]; then
    echo "illustration"
  fi
}

function svg_name() {
  FILE=${1##*/}
  echo ${FILE%%.*}
}

echo "# [$NEW_TAG]"

if git log "$LAST_TAG..HEAD" --grep "BREAKING CHANGE" | grep "BREAKING CHANGE" > /dev/null; then
  echo ""
  echo "## Breaking changes"
  echo ""
  while read commit; do
    echo "  - $commit"
  done < <(git log --oneline --grep "BREAKING CHANGE")
fi

echo "## Changes"

function svg_update() {
    STATUS=$1
    SOURCE=$2
    TARGET=$3
    TYPE=$(svg_type "$SOURCE");
    NAME=$(svg_name "$SOURCE")
    case "$STATUS" in
        "R"*)
            TARGET_NAME=$(svg_name "$TARGET")
            echo "  - Renamed $TYPE '$NAME' to '$TARGET_NAME'";;
        A)
            echo "  - Added $TYPE '$NAME'";;
        M)
            echo "  - Updated $TYPE '$NAME'";;
        D)
            echo "  - Removed $TYPE '$NAME'";;
        *)
            echo "  - INVALID OPERATION $STATUS for $NAME";;
    esac
}

while read STATUS SOURCE TARGET; do
  if [ "$SOURCE" == "build_scripts/file_icons_version" ] || [ "$SOURCE" == "src/file_icon_map.js" ]; then
    case "$STATUS" in
        A)
            echo "  - Added file icons";;
        M)
            echo "  - Updated file icons";;
        *)
            echo "  - INVALID OPERATION $STATUS for file icons";;
    esac
  else
    svg_update "$STATUS" "$SOURCE" "$TARGET"
  fi
done  < <(git diff "$LAST_TAG..HEAD" --name-status --diff-filter=ADMR -- sprite_icons illustrations build_scripts/file_icons_version src/file_icon_map.js | sort)

if git log "$LAST_TAG..HEAD" --grep "^fix:" --no-merges --format=%s | grep "^fix:" > /dev/null; then
  echo ""
  echo "## Fixes"
  echo ""
  while read commit; do
    echo "  - $commit"
  done < <(git log "$LAST_TAG..HEAD" --grep "^fix:" --no-merges --oneline)
fi

exit 0
