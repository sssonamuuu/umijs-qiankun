const path = require('path');
const fs = require('fs');
const checkFileName = require('./utils/check-filename');
const copyFile = require('./utils/copy-file');

const fileName = process.argv[2];

checkFileName(fileName);

copyFile(
  path.join(__dirname, '../templates/app/'),
  path.join(__dirname, `../apps/${fileName}`),
);

setTimeout(() => {
  fs.writeFileSync(
    path.join(__dirname, `../apps/${fileName}/package.json`),
    JSON.stringify(
      {
        ...require(path.join(__dirname, '../templates/app/package.json')),
        name: `@app/${fileName}`,
      },
      null,
      '  ',
    ),
    'utf-8',
  );
}, 500);
