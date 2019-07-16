#!/bin/bash

rm -rf _site

# if [ -z "$(git status --porcelain)" ]; then
    echo ">>> Working directory clean"
    setopt extended_glob
    TMP_LOC=/tmp/deepu.github.io

    /bin/rm -rf _site
    /bin/rm -rf $TMP_LOC

    echo ">> Building site"
    bundle update listen
    bundle exec jekyll build

    echo ">> Move site to temp folder"
    mkdir --parents $TMP_LOC
    mv _site/* $TMP_LOC

    echo ">> Checkout and clean master"
    git checkout master
    /bin/rm -rf ^*vendor*

    echo ">> Move site form temp & publish to GitHub"
    mv -f $TMP_LOC/* .
    now=$(date)
    git add --all
    git commit -am "Updated site on $now"
    git push origin master --force

    echo "$now: Published changes to GitHub"

    git checkout site_src
# else
#     echo "Working directory is not clean. Commit changes!"
#     exit
# fi
