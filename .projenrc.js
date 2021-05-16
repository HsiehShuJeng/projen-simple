const { AwsCdkConstructLibrary, NpmAccess, ProjectType } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorAddress: 'fantatsicSie@hotmail.com',
  cdkVersion: '1.103.0',
  defaultReleaseBranch: 'main',
  name: 'projen-example',
  repositoryUrl: 'https://github.com/HsiehShuJeng/projen-simple.git',
  projectName: 'projen-scott-example',
  projectType: ProjectType.LIB,
  cdkAssert: true,
  cdkDependencies: ['@aws-cdk/core', '@aws-cdk/aws-lambda'],
  cdkVersionPinning: false, // see https://www.matthewbonig.com/2021/04/06/automating-construct-publishing/

  devDeps: ['esbuild'],

  npmAccess: NpmAccess.PUBLIC,

  mergify: true,
  docgen: true,
  eslint: true,
  dependabot: true,

  gitignore: ['.idea', 'public.pem', 'private.pem'],
  defaultReleaseBranch: 'main',

  // publish to npm
  releaseToNpm: true,
  releaseBranches: ['main'],
  releaseWorkflow: true,
  releaseEveryCommit: true, //will run the release GitHub Action on each push to the defined

  // publish to PyPi
  publishToPypi: {
    distName: 'scotthsieh_projen_inception',
    module: 'scotthsieh_projen_inception',
  },

  // publish to Maven
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'projen-inception',
    javaPackage: 'io.github.hsiehshujeng.projen.inception',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },

  // publish to dotnet
  // publishToNuget: {
  //   dotNetNamespace: string,
  //   packageId: string
  // }

  // publish to Go
  // publishToGo: {
  //   moduleName: string
  // }

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