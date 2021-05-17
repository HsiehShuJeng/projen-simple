import * as cdk from '@aws-cdk/core';
// import * as iam from '@aws-cdk/aws-iam';
// import * as sfn from '@aws-cdk/aws-stepfunctions';
// import * as tasks from '@aws-cdk/aws-stepfunctions-tasks';
// import {
//   AuthorizationType,
//   EndpointType,
//   Integration,
//   IntegrationType,
//   JsonSchemaVersion,
//   JsonSchemaType,
//   PassthroughBehavior,
//   RestApi
// } from '@aws-cdk/aws-apigateway';


export class TypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const stageName = 'default';
    // const partPath = 'pets';
    // const restApi = this._createRestApi(stageName, partPath);
    // const stepFunctionsExecutionRole = this._createWorkFlowRole(restApi, stageName, partPath);
    // const stateMachine = this._createStateMachine(stepFunctionsExecutionRole, restApi, stageName, partPath);

    // new cdk.CfnOutput(this, 'OStateMachine', { value: stateMachine.stateMachineArn });
    new cdk.CfnOutput(this, 'OExecutionOutput', {
      value: JSON.stringify({
        'NewPet': {
          'type': 'turtle',
          'price': 74.99
        }
      }),
      description: 'Sample input to StartExecution.'
    });
  }

  //   /**
  //    * Creates a Rest API.
  //    * 
  //    * @param stageName A stage name for the rest api
  //    * @param partPath The path part for the resource
  //    * @returns a rest api.
  //    */
  //   private _createRestApi = (stageName: string, partPath: string) => {
  //     const petStoreapi = new RestApi(this, 'ApiGatewayPetStoreApi', {
  //       deploy: true,
  //       deployOptions: { stageName: stageName },
  //       restApiName: 'PetStore',
  //       description: 'Your first API with Amazon API Gateway. This is a sample API that integrates via HTTP with our demo Pet Store endpoints.',
  //       endpointConfiguration: { types: [EndpointType.REGIONAL] }
  //     });
  //     // create reference models
  //     const petModel = petStoreapi.addModel('Pet', {
  //       contentType: 'application/json',
  //       modelName: 'Pet',
  //       schema: {
  //         schema: JsonSchemaVersion.DRAFT4,
  //         title: 'Pet Mdoel',
  //         type: JsonSchemaType.OBJECT,
  //         properties: {
  //           id: { type: JsonSchemaType.INTEGER, format: 'int32' },
  //           type: { type: JsonSchemaType.STRING },
  //           price: { type: JsonSchemaType.NUMBER }
  //         }
  //       }
  //     });
  //     const petTypeModel = petStoreapi.addModel('PetType', {
  //       contentType: 'application/json',
  //       modelName: 'PetType',
  //       schema: {
  //         schema: JsonSchemaVersion.DRAFT4,
  //         title: 'Pet Type',
  //         type: JsonSchemaType.STRING,
  //         'enum': ['dog', 'cat', 'fish', 'bird', 'gecko']
  //       }
  //     });
  //     const petsModel = petStoreapi.addModel('PetsModel', {
  //       contentType: 'application/json',
  //       modelName: 'Pets',
  //       schema: {
  //         schema: JsonSchemaVersion.DRAFT4,
  //         title: 'Pets',
  //         type: JsonSchemaType.ARRAY,
  //         items: { ref: `https://apigateway.amazonaws.com/restapis/${petStoreapi.restApiId}/models/${petModel.modelId}` }
  //       }
  //     });
  //     const newPetModel = petStoreapi.addModel('NewPet', {
  //       contentType: 'application/json',
  //       modelName: 'NewPet',
  //       schema: {
  //         schema: JsonSchemaVersion.DRAFT4,
  //         title: 'New Pet',
  //         type: JsonSchemaType.OBJECT,
  //         properties: {
  //           type: { ref: `https://apigateway.amazonaws.com/restapis/${petStoreapi.restApiId}/models/${petTypeModel.modelId}` },
  //           price: { type: JsonSchemaType.NUMBER }
  //         }
  //       }
  //     });
  //     const newPetResponsemodel = petStoreapi.addModel('NewPetResponse', {
  //       contentType: 'application/json',
  //       modelName: 'NewPetResponse',
  //       schema: {
  //         schema: JsonSchemaVersion.DRAFT4,
  //         title: 'New Pet Response',
  //         type: JsonSchemaType.OBJECT,
  //         properties: {
  //           pet: { ref: `https://apigateway.amazonaws.com/restapis/${petStoreapi.restApiId}/models/${petModel.modelId}` },
  //           message: { type: JsonSchemaType.STRING }
  //         }
  //       }
  //     });

  //     const pets = petStoreapi.root.addResource(partPath);
  //     const httpEndpointUri = `http://${petStoreapi.restApiName.toLocaleLowerCase()}.execute-api.${cdk.Aws.REGION}.amazonaws.com/${petStoreapi.restApiName.toLocaleLowerCase()}/${partPath}`;

  //     // create methods
  //     pets.addMethod('GET',
  //       new Integration({
  //         type: IntegrationType.HTTP,
  //         integrationHttpMethod: 'GET',
  //         uri: httpEndpointUri,
  //         options: {
  //           passthroughBehavior: PassthroughBehavior.WHEN_NO_MATCH,
  //           integrationResponses: [{ statusCode: '200', }]
  //         }
  //       }),
  //       {
  //         authorizationType: AuthorizationType.IAM,
  //         methodResponses: [{
  //           statusCode: '200', responseModels: {
  //             ['application/json']: petsModel
  //           }
  //         }]
  //       });

  //     pets.addMethod('POST',
  //       new Integration({
  //         type: IntegrationType.HTTP,
  //         integrationHttpMethod: 'POST',
  //         uri: httpEndpointUri,
  //         options: {
  //           passthroughBehavior: PassthroughBehavior.WHEN_NO_MATCH,
  //           integrationResponses: [{ statusCode: '200' }]
  //         }
  //       }),
  //       {
  //         requestModels: { ['application/json']: newPetModel },
  //         apiKeyRequired: false,
  //         authorizationType: AuthorizationType.IAM,
  //         methodResponses: [{
  //           statusCode: '200', responseModels: { ['application/json']: newPetResponsemodel }
  //         }]
  //       });
  //     return petStoreapi;
  //   }

  //   /**
  //    * Creates an IAM role for Step Functions.
  //    * 
  //    * @param restApi The rest APIs for adding and storing pets.
  //    * @param stageName The stage name for the rest api
  //    * @param partPath The path part for the resource
  //    * @returns an IAM role for Step Functions.
  //    */
  //   private _createWorkFlowRole = (restApi: RestApi, stageName: string, partPath: string) => {
  //     const workFlowExecutionRole = new iam.Role(this, 'StepFunctionExecutionRole', {
  //       assumedBy: new iam.ServicePrincipal('states.amazonaws.com'),
  //       description: 'Execute a workflow related to API Gateway.'
  //     });
  //     const pathSuffix = `/${partPath}`;
  //     workFlowExecutionRole.addToPolicy(new iam.PolicyStatement({
  //       sid: 'ApiGatewayExecutionPermissions',
  //       effect: iam.Effect.ALLOW,
  //       actions: ['execute-api:Invoke'],
  //       resources: [
  //         restApi.arnForExecuteApi('GET', pathSuffix, stageName),
  //         restApi.arnForExecuteApi('POST', pathSuffix, stageName)]
  //     }));
  //     return workFlowExecutionRole;
  //   }

  //   /**
  //    * Creates a workflow.
  //    * 
  //    * @param executionRole an IAM role for StepFunctions to execute Rest APIs.
  //    * @param restApi The rest APIs for adding and storing pets.
  //    * @param stageName The stage name for the rest api.
  //    * @param partPath The path part for the resource.
  //    * @returns a state machine.
  //    */
  //   private _createStateMachine = (
  //     executionRole: iam.Role,
  //     restApi: RestApi,
  //     stageName: string,
  //     partPath: string) => {
  //     const submitJob = new CallApiGatewayRestApiEndpointwithResultSelector(this, 'Add Pet to Store', {
  //       api: restApi,
  //       stageName: stageName,
  //       apiPath: `/${partPath}`,
  //       method: tasks.HttpMethod.POST,
  //       authType: tasks.AuthType.IAM_ROLE,
  //       requestBody: { type: sfn.InputType.TEXT, value: '$.NewPet' },
  //       resultSelector: { 'ResponseBody.$': '$.ResponseBody' }
  //     });
  //     const storePetJob = new CallApiGatewayRestApiEndpointwithResultSelector(this, 'Retrieve Pet Store Data', {
  //       api: restApi,
  //       stageName: stageName,
  //       apiPath: `/${partPath}`,
  //       method: tasks.HttpMethod.GET,
  //       authType: tasks.AuthType.IAM_ROLE,
  //       resultPath: '$.ExistingPets',
  //       resultSelector: { 'Pets.$': '$.ResponseBody' }
  //     });
  //     const jobFailed = new sfn.Fail(this, 'Failure');
  //     const choice = new sfn.Choice(this, 'Pet was Added Successfully?');
  //     choice.when(sfn.Condition.isPresent('$.ResponseBody.errors'), jobFailed);
  //     choice.otherwise(storePetJob);

  //     const jobDefinition = submitJob.next(choice);
  //     const stateMachine = new sfn.StateMachine(this, 'StateMachine', {
  //       definition: jobDefinition,
  //       role: executionRole
  //     });
  //     return stateMachine;
  //   }
  // }

  // export interface CallApiGatewayRestApiEndpointwithResultSelectorProps extends tasks.CallApiGatewayRestApiEndpointProps {
  //   readonly resultSelector?: object
  // }

  // class CallApiGatewayRestApiEndpointwithResultSelector extends tasks.CallApiGatewayRestApiEndpoint {
  //   private readonly resultSelector?: object;
  //   constructor(scope: cdk.Construct, id: string, props: CallApiGatewayRestApiEndpointwithResultSelectorProps) {
  //     super(scope, id, props);
  //     this.resultSelector = props.resultSelector
  //   }

  //   public toStateJson(): object {
  //     const stateJson: any = super.toStateJson();
  //     if (this.resultSelector !== undefined) {
  //       stateJson.ResultSelector = this.resultSelector
  //     }
  //     return stateJson;
  //   }
}