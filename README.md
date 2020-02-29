$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (todo-list)
version: (1.0.0)
description:
entry point: (webpack.config.js) './src/index.js'
test command:
git repository: (https://github.com/geraldgsh/todo-list.git)
keywords:
author: Gerald Goh
license: (ISC)
About to write to /mnt/d/Google_Drive/Microverse/5.Javascript/4.oop/todo-list/package.json:

{
  "name": "todo-list",
  "version": "1.0.0",
  "description": "A Todo list written in Javascript.",
  "main": "'./src/index.js'",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/geraldgsh/todo-list.git"
  },
  "author": "Gerald Goh",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/geraldgsh/todo-list/issues"
  },
  "homepage": "https://github.com/geraldgsh/todo-list#readme"
}


Is this OK? (yes) yes

$ npm install webpack webpack-cli --save-dev
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): EINVAL: invalid argument, lstat '/mnt/d/Google_Drive/Microverse/5.Javascript/4.oop/todo-list/node_modules/fsevents/node_modules'
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ webpack@4.41.6
+ webpack-cli@3.3.11
added 360 packages from 209 contributors, removed 10 packages and audited 5675 packages in 20.445s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ yarn build
yarn run v1.21.1
$ webpack --mode development
Hash: b1da89cb171151efa254
Version: webpack 4.41.6
Time: 113ms
Built at: 02/29/2020 11:27:59 PM
  Asset      Size  Chunks             Chunk Names
main.js  16.5 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 11.9 KiB {main} [built]
Done in 2.24s.

$ yarn watch
yarn run v1.21.1
$ webpack --progress --watch
10% building 0/0 modules 0 active
webpack is watching the files…

Hash: b1da89cb171151efa254
Version: webpack 4.41.6
Time: 141ms
Built at: 02/29/2020 11:28:23 PM
  Asset      Size  Chunks             Chunk Names
main.js  16.5 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 11.9 KiB {main} [built]