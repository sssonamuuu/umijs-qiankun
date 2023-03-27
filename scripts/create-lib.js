const path = require('path');
const fs = require('fs');
const checkFileName = require('./utils/check-filename');
const copyFile = require('./utils/copy-file');
const { spawn } = require('child_process');

const fileName = process.argv[2];

checkFileName(fileName);

copyFile(
  path.join(__dirname, '../templates/library/'),
  path.join(__dirname, `../libraries/${fileName}`),
);

setTimeout(() => {
  fs.writeFileSync(
    path.join(__dirname, `../libraries/${fileName}/package.json`),
    JSON.stringify(
      {
        ...require(path.join(__dirname, '../templates/library/package.json')),
        name: `@lw/${fileName}`,
      },
      null,
      '  ',
    ),
    'utf-8',
  );

  const pkg = require(path.join(__dirname, `../package.json`));
  fs.writeFileSync(
    path.join(__dirname, `../package.json`),
    JSON.stringify(
      {
        ...require(path.join(__dirname, `../package.json`)),
        dependencies: {
          ...pkg.dependencies,
          [`@lw/${fileName}`]: 'workspace:*',
        },
      },
      null,
      '  ',
    ),
    'utf-8',
  );
}, 500);

const pnpm = spawn('pnpm', ['install'], {});
pnpm.stdout.on('data', (data) => console.log(data.toString()));
pnpm.stderr.on('data', (data) => console.log(data.toString()));
