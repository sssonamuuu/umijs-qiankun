const fs = require('fs');

module.exports = function checkFileName(fileName) {
  const appFiles = fs.readdirSync(`./apps`);
  const libFiles = fs.readdirSync(`./libraries`);
  if (!fileName) {
    throw new Error('请输入文件名！');
  } else if (!/^[a-z][a-z-]+[a-z]$/.test(fileName)) {
    throw new Error('请输入-分割的文件名！');
  } else if (appFiles.includes(fileName)) {
    throw new Error('已有该名称的app,请修改名字！');
  } else if (libFiles.includes(fileName)) {
    throw new Error('已有该名称的library,请修改名字！');
  }
};
