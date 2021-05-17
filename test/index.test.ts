import { countResources, expect as expectCDK } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { StateMachineApiGatewayExample } from '../src/statemachine-examples';

test('Simple test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new StateMachineApiGatewayExample(stack, 'StateMachineApiGateway', { stageName: 'default', partPath: 'pets' });

  expectCDK(stack).to(countResources('AWS::ApiGateway::Model', 5));
  expectCDK(stack).to(countResources('AWS::ApiGateway::RestApi', 1));
  expectCDK(stack).to(countResources('AWS::ApiGateway::Deployment', 1));
  expectCDK(stack).to(countResources('AWS::IAM::Role', 2));
  expectCDK(stack).to(countResources('AWS::StepFunctions::StateMachine', 1));
});