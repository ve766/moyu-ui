#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

SCRIPT_PATH=${0%/*}

SCRIPT_PATH=$(realpath $SCRIPT_PATH)

# In order to update the file icons, go to
# https://github.com/PKief/vscode-material-icon-theme
# and pick a newer commit and put that commit into
# file_icons_version
FILE_ICONS_VERSION=$(cat "$SCRIPT_PATH/file_icons_version")
TMP_PATH="$SCRIPT_PATH/../.tmp"

function download_file_icons {
  echo "Download vscode-material-icon-theme File Icons"

  # Cleanup previous downloads
  rm -rf file_icons/*.svg "$TMP_PATH" file_icons_unused
  mkdir -p "$TMP_PATH"
  cd "$TMP_PATH"

  # Download and unpack specified versions file_icons_version
  curl --location --output file_icons.zip --fail \
    "https://github.com/PKief/vscode-material-icon-theme/archive/$FILE_ICONS_VERSION.zip"
  unzip file_icons.zip

  # Only copy used icons
  for icon in $(node "$SCRIPT_PATH/used_file_icons.js"); do
    mv vscode-material-icon-theme-*/icons/"$icon.svg" ../file_icons
  done

  # Overwrite Kotlin logo with monospace version
  curl --location --output kotlin_logos.zip --fail \
    "https://resources.jetbrains.com/storage/products/kotlin/docs/kotlin_logos.zip"
  unzip kotlin_logos
  KOTLIN_LOGO="Digital/Mark/One Color/Kotlin One Color Logo Mark RGB.svg"
  test -f "$KOTLIN_LOGO"
  mv "$KOTLIN_LOGO" ../file_icons/kotlin.svg

  # Move unused icons over to a separate folder (useful for adding more language support later)
  mv vscode-material-icon-theme-*/icons ../file_icons_unused
  cd ..

  # Overwrite GitLab Logo with latest version
  cp -f illustrations/gitlab_logo.svg file_icons/gitlab.svg
}

download_file_icons

echo "Starting SVG Build (combining sprites and minifying assets)"
node "$SCRIPT_PATH/index.js"
