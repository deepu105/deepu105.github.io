#!/bin/bash

rm -rf _site

if [ -z "$(git status --porcelain)" ]; then
    # Working directory clean
    TMP_LOC=/tmp/deepu.github.io
    # Build site
    bundle update listen
    bundle exec jekyll build

    # Move to temp
    mkdir --parents $TMP_LOC
    mv _site/* $TMP_LOC

    #  CLean directory
    git checkout master
    rm -rf *

    # Move site form temp & publish
    mv $TMP_LOC/* .
    git add --all
    git commit -am "Updated site on $now"
    git push origin master

    echo "$now: Published changes to GitHub"

    git checkout site_src
else
    echo "Working directory is not clean. Commit changes!"
    exit
fi
