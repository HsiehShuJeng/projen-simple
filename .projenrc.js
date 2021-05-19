const { AwsCdkConstructLibrary, NpmAccess, ProjectType } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  keywords: ['stepfunctions', 'apigateway', 'projen', 'scott.hsieh'],

  catalog: {
    twitter: 'fantasticHsieh',
  },

  cdkVersion: '1.104.0',
  defaultReleaseBranch: 'main',
  name: 'projen-statemachine-example',
  repositoryUrl: 'https://github.com/HsiehShuJeng/projen-simple.git',
  projectName: 'projen-statemachine-example',
  projectType: ProjectType.LIB,

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigateway',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-stepfunctions',
    '@aws-cdk/aws-stepfunctions-tasks',
  ],
  cdkAssert: true,
  cdkVersionPinning: false, // see https://www.matthewbonig.com/2021/04/06/automating-construct-publishing/

  devDeps: [
    'esbuild',
    'source-map-support',
  ],

  npmAccess: NpmAccess.PUBLIC,

  mergify: true,
  docgen: true,
  eslint: true,
  dependabot: true,

  gitignore: [
    'cdk.out/',
    // For Mavn GPG
    'public.pem',
    'private.pem',
    // For Python demo
    '*.swp',
    'package-lock.json',
    '__pycache__',
    '.pytest_cache',
    '.env',
    '.venv',
    '*.egg-info',
    // For Java demo
    '.classpath.txt',
    'target/',
    '.classpath',
    '.project',
    '.idea',
    '.settings',
    '.vscode/',
    '*.iml',
  ],
  defaultReleaseBranch: 'main',

  // publish to npm
  releaseToNpm: true,
  releaseBranches: ['main'],
  releaseWorkflow: true,
  releaseEveryCommit: true, //will run the release GitHub Action on each push to the defined

  // publish to PyPi
  publishToPypi: {
    distName: 'scotthsieh_projen_statemachine',
    module: 'scotthsieh_projen_statemachine',
  },

  // publish to Maven
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'projen-statemachine',
    javaPackage: 'io.github.hsiehshujeng.projen.statemachine',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },

  // publish to dotnet
  publishToNuget: {
    dotNetNamespace: 'ScottHsieh.Examples',
    packageId: 'Projen.Statemachine',
  },
});
project.synth();