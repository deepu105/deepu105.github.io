#!/bin/bash

rm -rf _site

if [ -z "$(git status --porcelain)" ]; then
    # Working directory clean
    setopt extended_glob
    TMP_LOC=/tmp/deepu.github.io

    /bin/rm -rf _site
    # Build site
    bundle update listen
    bundle exec jekyll build

    # Move to temp
    mkdir --parents $TMP_LOC
    mv _site/* $TMP_LOC

    #  Clean directory
    git checkout master
    sleep 5
    /bin/rm -rf ^*vendor*
    sleep 5

    # Move site form temp & publish
    mv -f $TMP_LOC/* .
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
