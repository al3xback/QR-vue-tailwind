#!/usr/bin/env sh

set -e
npm run build
cd dist

git init
git add -A
git commit -m 'deploy'
git branch -m main
git push -f git@github.com:al3xback/QR-vue-tailwind.git main:gh-pages

cd -
