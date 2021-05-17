import { CallApiGatewayRestApiEndpoint, CallApiGatewayRestApiEndpointProps } from '@aws-cdk/aws-stepfunctions-tasks';
import * as cdk from '@aws-cdk/core';

export interface CallApiGatewayRestApiEndpointwithResultSelectorProps extends CallApiGatewayRestApiEndpointProps {
  readonly resultSelector?: object;
}

export class CallApiGatewayRestApiEndpointwithResultSelector extends CallApiGatewayRestApiEndpoint {
  private readonly resultSelector?: object;
  constructor(scope: cdk.Construct, id: string, props: CallApiGatewayRestApiEndpointwithResultSelectorProps) {
    super(scope, id, props);
    this.resultSelector = props.resultSelector;
  }

  public toStateJson(): object {
    const stateJson: any = super.toStateJson();
    if (this.resultSelector !== undefined) {
      stateJson.ResultSelector = this.resultSelector;
    }
    return stateJson;
  }
}