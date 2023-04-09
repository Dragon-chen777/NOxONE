git add -A
git commit -m 'modify'
git push
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Dragon-chen777/NOxONE.git master:gh-pages
