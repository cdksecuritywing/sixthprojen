const { JsiiProject } = require('projen');
const project = new JsiiProject({
  author: 'user',
  authorAddress: 'user@domain.com',
  defaultReleaseBranch: 'main',
  name: 'sixthprojen',
  repositoryUrl: 'https://github.com/user/sixthprojen.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();