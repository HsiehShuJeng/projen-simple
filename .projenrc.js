const { AwsCdkConstructLibrary, ProjectType } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorAddress: 'fantatsicSie@hotmail.com',
  cdkVersion: '1.103.0',
  defaultReleaseBranch: 'main',
  name: 'projen-example',
  repositoryUrl: 'https://github.com/HsiehShuJeng/projen-simple.git',
  projectName: 'projen-example',
  projectType: ProjectType.LIB,
  cdkAssert: true,
  cdkDependencies: ['@aws-cdk/core', '@aws-cdk/aws-lambda'],
  mergify: true,
  docgen: true,
  eslint: true,
  dependabot: true,
  gitignore: ['.idea'],

  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});
project.synth();