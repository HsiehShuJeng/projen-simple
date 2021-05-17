# projen-simple  
Build a custom construct based on an AWS Blog post and use projen to publish to 4 language repositories.   
(Hope Go is coming soon)  

# Architecture  
This library constrcution is referred to [this AWS blog](https://aws.amazon.com/tw/blogs/compute/introducing-amazon-api-gateway-service-integration-for-aws-step-functions/).  

# Demonstration about How to Utilize Polyglot Packages  
## TypeScript
   ```bash
   $ cdk --init language typescript
   $ yarn add projen-statemachine-example
   ``` 
   ```typescript
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
   ```

# References  
* [jsii reference](https://github.com/cdklabs/jsii-release)  
* [aws-cdk-go](https://github.com/aws/aws-cdk-go)  
* [jsii](https://github.com/aws/jsii)  