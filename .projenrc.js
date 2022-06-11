const projen = require('projen');
const project = new projen.awscdk.AwsCdkConstructLibrary({
  author: 'scott.hsieh',
  authorName: 'Shu-Jeng Hsieh',
  authorAddress: 'https://fantasticsie.medium.com/',
  keywords: ['stepfunctions', 'apigateway', 'projen', 'scott.hsieh'],
  description: 'An example construct for deploying to npm, PyPi, Maven, and Nuget with Amazon API Gateway and AWS Step Functions.',

  cdkVersion: '2.27.0',
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  name: 'projen-statemachine-example',
  repositoryUrl: 'https://github.com/HsiehShuJeng/projen-simple.git',
  deps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
  ],
  devDeps: [
    'esbuild',
    'source-map-support',
  ],
  peerDeps: [
    'aws-cdk-lib',
    'constructs@^10.0.5',
  ],
  eslint: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['HsiehShuJeng'],
  },

  gitignore: [
    'cdk.out',
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
  releaseToNpm: true,
  publishToPypi: {
    distName: 'scotthsieh_projen_statemachine',
    module: 'scotthsieh_projen_statemachine',
  },
  publishToMaven: {
    mavenGroupId: 'io.github.hsiehshujeng',
    mavenArtifactId: 'projen-statemachine',
    javaPackage: 'io.github.hsiehshujeng.projen.statemachine',
    mavenEndpoint: 'https://s01.oss.sonatype.org', // check https://central.sonatype.org/publish/release/#login-into-ossrh
  },
  publishToNuget: {
    dotNetNamespace: 'ScottHsieh.Examples',
    packageId: 'Projen.Statemachine',
  },
  publishToGo: {
    moduleName: 'github.com/HsiehShuJeng/projen-statemachine-go',
  },
});
project.synth();