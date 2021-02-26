#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 保证你的字符集正确，如果是英文写en_US.UTF-8，如果是中文写zh_CN.UTF-8
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8

# 执行copy
rm -rf src/test
cp -r ../abc/src/pages/inspect src/test

echo '[copy] done.'


git init
git add -A
git commit -m 'feat: merge inspect'

echo '[commit] done.'

exit 0