const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

fs.promises.readdir(path.join(__dirname, '../apps')).then(async res => {
  const cli = './node_modules/.bin/concurrently';
  const args = [];
  for (const item of res) {
    try {
      await fs.promises.stat(path.join(__dirname, '../apps', item, 'package.json'));
      args.push(`"./node_modules/.bin/pnpm start${process.env.PROJECT_ENV ? `:${process.env.PROJECT_ENV}` : ''} --filter ${item}"`);
    } catch {}
  }

  const child = spawn(cli, args);

  child.on('exit', code =>
    console.log('Process exited with code', code));

  child.stdout.on('data', data => {
    console.log(data.toString());
  });
  child.stderr.on('data', data => {
    console.log(data.toString());
  });
});
