const fs = require('fs');
const path = require('path');

/**
 * 复制文件夹到目标文件夹
 * @param {string} src 源目录
 * @param {string} dest 目标目录
 */
module.exports = (src, dest) => {
  const copy = (copySrc, copyDest) => {
    const list = fs.readdirSync(copySrc);
    list.forEach((item) => {
      const ss = path.resolve(copySrc, item);
      const stat = fs.statSync(ss);
      const curSrc = path.resolve(copySrc, item);
      const curDest = path.resolve(copyDest, item);

      if (stat.isFile()) {
        // 文件，直接复制
        fs.createReadStream(curSrc).pipe(fs.createWriteStream(curDest));
      } else if (stat.isDirectory()) {
        // 目录，进行递归
        fs.mkdirSync(curDest, { recursive: true });
        copy(curSrc, curDest);
      }
    });
  };

  try {
    fs.accessSync(dest);
  } catch {
    // 若目标目录不存在，则创建
    fs.mkdirSync(dest, { recursive: true });
  }

  copy(src, dest);
};
