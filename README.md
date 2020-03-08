# Microverse Project Title - Todo List
[Collaborative Project]
Javascript

### Snapshot

![](https://github.com/geraldgsh/todo-list/blob/feature/dist/media/amie.screenshot.JPG)

### Introduction.
The Todo list project comes after the student has learned about:

Objects
Factory Functions
The Module Pattern
And finally, after the introduction of a new lesson about OOP. The lesson shows the concepts of Single Responsibility and Tightly Coupled Objects.

You can find the original project specification at: https://www.theodinproject.com/courses/javascript/lessons/todo-list

### Project Objectives

Todo lists are a staple in beginning webdev tutorials because they can be very simple. There is, however, a lot of room for improvement and many features that can be added.

Before diving into the code, take a minute to think about how you are going to want to organize your project

1. Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.
```javascript
./src/modules/constructor.js

export const projectList = [];

export const Project = (name, id) => ({
  name,
  id,
  tasks: [],
});

export const Task = (title, desc, dueDate, priority, done, id) => ({
  title,
  desc,
  dueDate,
  priority,
  done,
  id,
});
```

2. Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.
```javascript
See image below
```

3. Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.
![](https://github.com/geraldgsh/todo-list/blob/feature/dist/media/default_task.JPG)

```sh
./src

|
├── starter
|   ├── starterProjectTask.js
```

and see below.

4. You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.
```sh
./src

├── control
|   ├── projectControl.js
|   ├── taskControl.js
|
├── DOM
|   ├── projectDOM.js
|   ├── taskDOM.js
|   ├── projectInput.js
|   ├── taskInput.js
|
├── Modules
|   ├── BulmaModal.js
|   ├── constructor.js
|   ├── localStorage.js
|
├── starter
|   ├── starterProjectTask.js
```

5. The look of the User Interface is up to you, but it should be able to do the following:
a. view all projects
![](https://github.com/geraldgsh/todo-list/blob/feature/dist/media/project-card.jpg)
b. view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
![](https://github.com/geraldgsh/todo-list/blob/feature/dist/media/whole.JPG)
c. expand a single todo to see/edit it’s details
```sh
See image above
```
d. delete a todo
```sh
See image above
```

6. For inspiration, check out the following great todo apps. (look at screenshots, watch their introduction videos etc.)
a. [Todoist](https://en.todoist.com/)
b. [Things](https://culturedcode.com/things/)
c. [any.do](https://www.any.do/)

7. Use localStorage to save user’s projects and todos between sessions.
```javscript
const updateLocalStorage = (arr) => {
  window.localStorage.setItem('projectList', JSON.stringify(arr));
};
```

8. Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:
date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.

### Sweetalert setup

#### Installation

###### NPM/Yarn

NPM combined with a tool like Browserify or Webpack is the recommended method of installing SweetAlert.

```sh
npm install sweetalert
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ sweetalert@2.1.2
added 3 packages from 3 contributors, removed 50 packages and audited 5678 packages in 9.646s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Import it into your application:

```javascript
import swal from 'sweetalert';
```

##### Sweetalert CDN

You can also find SweetAlert on unpkg and jsDelivr and use the global swal variable.

```html
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
```

### Linter Setup

Clone file [content](https://github.com/microverseinc/linters-config/tree/master/javascript) into root directory (except for readme.md)

Install ESLint on Linux environment using the following commands

Install Node Version Manager to update NodeJS + NPM.

```sh
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

$export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

$[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Run the following command to verify installation;

```sh
$ command -v 
nvm
```

To download, compile, and install the latest release of node, do this.

```sh
nvm install node
```

Source [here](https://github.com/nvm-sh/nvm#installing-and-updating)

Go project folder using WSL environment and initiate NPM with following command

```sh
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
```

Command above will generate a "package.json" file for ESlint work off from.

Install ESlint with following command

```sh
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
```

Run the following to configure eslint in project root folder

```sh
$ eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.1.0 eslint-plugin-import@^2.18.2
? Would you like to install them now with npm? Yes
Installing eslint-config-airbnb-base@latest, eslint@^5.16.0 || ^6.1.0, eslint-plugin-import@^2.18.2
npm notice save eslint is being moved from dependencies to devDependencies
+ eslint-config-airbnb-base@14.0.0
+ eslint@6.8.0
+ eslint-plugin-import@2.20.1
added 61 packages from 37 contributors, updated 1 package and audited 387 packages in 8.597s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Successfully created .eslintrc.json file in 
/todo-list
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.
```

Start ESlint with this command.

```sh
eslint script.js
```

#### Setup Webpack watch

Install webpack;

```sh
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
```

Now we'll create the following directory structure, files and their contents:

Create;
./webpack.config.js

```javascript
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
```

Webpack can watch files and recompile whenever they change. Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.

```javascript
./package.json

{
  "name": "todo-list",
  "version": "1.0.0",
  "description": "A Todo list written in Javascript.",
  "main": "'./src/index.js'",
  "scripts": {
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --progress --watch"
  },
  .
  .
```

Run "yarn build"

```javascript
$ yarn build
yarn run v1.21.1
$ webpack --mode development
Hash: 87bba94788336242806f
Version: webpack 4.41.6
Time: 102ms
Built at: 02/21/2020 5:33:18 AM
  Asset      Size  Chunks             Chunk Names
main.js  12.3 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 1.23 KiB {main} [built]
[./src/modules/DOMControl.js] 3.12 KiB {main} [built]
[./src/modules/localControl.js] 1.6 KiB {main} [built]
Done in 2.67s.
```

Or run "yarn watch" to start.
```javascript
$ yarn watch

yarn run v1.21.1
$ webpack --watch

webpack is watching the files…

Hash: c1487def981e257fe947
Version: webpack 4.41.6
Time: 392ms
Built at: 02/21/2020 5:34:39 AM
  Asset      Size  Chunks             Chunk Names
main.js  1.55 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js + 2 modules 5.96 KiB {0} [built]
    | ./src/index.js 1.23 KiB [built]
    | ./src/modules/DOMControl.js 3.12 KiB [built]
    | ./src/modules/localControl.js 1.6 KiB [built]
```

#### Steps to publish Page to Githack

1. Navigate to "dist/index.html" on GitHub Page Repo then copy URL (step #1) as illustrated below

![](https://github.com/geraldgsh/restaurant-page/blob/development/dist/media/Github-index.jpg?raw=true)

2. Go to https://raw.githack.com/, paste GitHub directory into input box (step #2) to generate URL (step #3) illustrated below.

![](https://github.com/geraldgsh/restaurant-page/blob/development/dist/media/githack.jpg?raw=true)

#### Todo-list
This is a Todo-list app built with JS.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/todo-list/wiki) for more details. 

#### Live Demo
[Demo](https://rawcdn.githack.com/geraldgsh/todo-list/f254b8c4d01a9863f7d1206426569677e25cdd70/dist/index.html)

#### Getting Started
Clone repo and run index.html

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

### Original Project Source
https://www.theodinproject.com/courses/javascript/lessons/todo-list

### Github Repo
https://github.com/geraldgsh/todo-list


👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://github.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/todo-list/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.
