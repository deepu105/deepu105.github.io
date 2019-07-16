#!/bin/bash

rm -rf _site

if [ -z "$(git status --porcelain)" ]; then
    # Working directory clean
    TMP_LOC=/tmp/deepu.github.io
    /bin/rm -rf _site
    # Build site
    bundle update listen
    bundle exec jekyll build

    # Move to temp
    mkdir --parents $TMP_LOC
    mv _site/* $TMP_LOC

    #  CLean directory
    git checkout master
    /bin/rm -rf *

    # Move site form temp & publish
    mv $TMP_LOC/* .
    now=$(date)
    git add --all
    git commit -am "Updated site on $now"
    git push origin master --force

    echo "$now: Published changes to GitHub"

    git checkout site_src
else
    echo "Working directory is not clean. Commit changes!"
    exit
fi
