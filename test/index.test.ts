import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StateMachineApiGatewayExample } from '../src/statemachine-examples';

test('Simple test', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');

  new StateMachineApiGatewayExample(stack, 'StateMachineApiGateway', { stageName: 'default', partPath: 'pets' });
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::ApiGateway::Model', 5);
  template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
  template.resourceCountIs('AWS::ApiGateway::Deployment', 1);
  template.resourceCountIs('AWS::IAM::Role', 2);
  template.resourceCountIs('AWS::StepFunctions::StateMachine', 1);
});