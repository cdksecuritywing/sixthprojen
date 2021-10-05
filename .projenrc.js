const { JsiiProject } = require('projen');
//const { JsiiProject,NodePackageManager } = require('projen');
const project = new JsiiProject({
  author: 'syras',
  authorAddress: 'syrasmamun@gmail.com',
  defaultReleaseBranch: 'main',
  name: '@cdksecuritywing/sixthprojen',
  // packageManager: NodePackageManager.NPM,
  repositoryUrl: 'https://github.com/cdksecuritywing/sixthprojen.git',
  jest: false,
  devDeps: [
    'fs-extra',
    //'@types/fs-extra@8.0.0',
    '@types/fs-extra@^8',
    // 's3module',
    //'@aws-cdk/aws-sns',
    //'@aws-cdk/aws-sns-subscriptions',
    //'projen',

  ],
  deps: ['projen'],
  peerDeps: [
    'projen',
  ],
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  //npmRegistryUrl: 'https://registry.npmjs.org/',
  //npmRegistryUrl: 'https://sixth-607281769355.d.codeartifact.eu-west-1.amazonaws.com/npm/sixthartifact/',
  //publishConfig: { "registry": "https://sixth-607281769355.d.codeartifact.eu-west-1.amazonaws.com/npm/sixthartifact/" },


  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();
