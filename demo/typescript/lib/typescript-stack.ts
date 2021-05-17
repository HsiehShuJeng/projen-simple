import * as cdk from '@aws-cdk/core';
import { StateMachineApiGatewayExample } from 'projen-statemachine-example';


export class TypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const stageName = 'default';
    const partPath = 'pets';
    const exampleConstruct = new StateMachineApiGatewayExample(this, 'KerKer', {
      stageName: stageName, partPath: partPath
    });

    new cdk.CfnOutput(this, 'OStateMachine', {
      value: exampleConstruct.stateMachine.stateMachineArn});
    new cdk.CfnOutput(this, 'OExecutionOutput', {value: exampleConstruct.executionInput, description: 'Sample input to StartExecution.'});
}