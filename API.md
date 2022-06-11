# API Reference

**Classes**

Name|Description
----|-----------
[StateMachineApiGatewayExample](#projen-statemachine-example-statemachineapigatewayexample)|Converted from an AWS Blog post.


**Structs**

Name|Description
----|-----------
[StateMachineApiGatewayExampleProps](#projen-statemachine-example-statemachineapigatewayexampleprops)|*No description*



## class StateMachineApiGatewayExample  <a id="projen-statemachine-example-statemachineapigatewayexample"></a>

Converted from an AWS Blog post.

It is the first example mentioned in https://aws.amazon.com/tw/blogs/compute/introducing-amazon-api-gateway-service-integration-for-aws-step-functions/.
This constcut will create an API Gateway Rest API with two methods and
are manipulated by a state machine managed in AWS StepFucntions.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new StateMachineApiGatewayExample(parent: Construct, name: string, props: StateMachineApiGatewayExampleProps)
```

* **parent** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **props** (<code>[StateMachineApiGatewayExampleProps](#projen-statemachine-example-statemachineapigatewayexampleprops)</code>)  *No description*
  * **partPath** (<code>string</code>)  The path part for the resource. 
  * **stageName** (<code>string</code>)  A stage name for the rest api. 



### Properties


Name | Type | Description 
-----|------|-------------
**executionInput** | <code>string</code> | sample input to start execution for the workflow.
**stateMachine** | <code>[aws_stepfunctions.StateMachine](#aws-cdk-lib-aws-stepfunctions-statemachine)</code> | the representation of a state machine.



## struct StateMachineApiGatewayExampleProps  <a id="projen-statemachine-example-statemachineapigatewayexampleprops"></a>






Name | Type | Description 
-----|------|-------------
**partPath** | <code>string</code> | The path part for the resource.
**stageName** | <code>string</code> | A stage name for the rest api.



