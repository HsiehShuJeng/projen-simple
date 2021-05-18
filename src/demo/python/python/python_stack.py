# For consistency with other languages, `cdk` is the preferred import name for
# the CDK's core module.  The following line also imports it as `core` for use
# with examples from the CDK Developer's Guide, which are in the process of
# being updated to use `cdk`.  You may delete this import if you don't need it.
from aws_cdk import core as cdk
from scotthsieh_projen_statemachine import StateMachineApiGatewayExample


class PythonStack(cdk.Stack):

    def __init__(self, scope: cdk.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        stage_name = 'default'
        part_path = 'pets'
        example_construct = StateMachineApiGatewayExample(
            self, 'KerKer', stage_name=stage_name, part_path=part_path,
        )

        cdk.CfnOutput(self, "OStateMachine",
            value=example_construct.state_machine.state_machine_arn
        )
        cdk.CfnOutput(self, "OExecutionOutput", value=example_construct.execution_input, description="Sample input to StartExecution.")
