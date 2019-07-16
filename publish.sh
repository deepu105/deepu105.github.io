#!/bin/bash

rm -rf _site

if [ -z "$(git status --porcelain)" ]; then
  # Working directory clean
    bundle update listen
    bundle exec jekyll build

    git checkout master

    rm -rf *
else
    echo "Working directory is not clean. Commit changes!"
    exit
fi
