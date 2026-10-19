#!/usr/bin/env bash

if grep -Rolq "\<mask\>" sprite_icons; then
    echo "SVG sprite icons are not allowed to use masking (<mask>)"
    echo "Please check the following files:"
    grep -Rol "\<mask\>" sprite_icons
    exit 1
fi

# When inlining our svgs, <defs> and internal xlink:hrefs might break things:
# https://gitlab.com/gitlab-org/gitlab/-/issues/230433#note_390375186
# Simply inlining the paths is sufficient
if grep -Rolq "\<defs\>" sprite_icons; then
    echo "SVG sprite icons are not allowed to use defs (<defs>) and xlink:href"
    echo "Please check the following files:"
    grep -Rol "\<defs\>" sprite_icons
    exit 1
fi

if grep -zvolq "\<svg.*viewBox.*\>" **/*.svg; then
    echo "SVG files must have a 'viewBox' attribute defined in the <svg> element"
    echo "Please check the following files:"
    grep -zvol "\<svg.*viewBox.*\>" **/*.svg
    exit 1
fi

echo "Checking the icon sprites succeeded"
exit 0
