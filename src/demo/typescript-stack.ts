#!/usr/bin/env node
// import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StateMachineApiGatewayExample } from '../statemachine-examples';

class TypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const stageName = 'default';
    const partPath = 'pets';
    const exampleConstruct = new StateMachineApiGatewayExample(this, 'KerKer', {
      stageName: stageName, partPath: partPath,
    });

    new cdk.CfnOutput(this, 'OStateMachine', { value: exampleConstruct.stateMachine.stateMachineArn });
    new cdk.CfnOutput(this, 'OExecutionOutput', { value: exampleConstruct.executionInput, description: 'Sample input to StartExecution.' });
  }
}

const app = new cdk.App();
new TypescriptStack(app, 'TypescriptStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
       * Account/Region-dependent features and context lookups will not work,
       * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
       * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
       * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});