package com.myorg;

import software.amazon.awscdk.core.Construct;
import software.amazon.awscdk.core.CfnOutput;
import software.amazon.awscdk.core.CfnOutputProps;
import software.amazon.awscdk.core.Stack;
import software.amazon.awscdk.core.StackProps;
import io.github.hsiehshujeng.projen.statemachine.*;

public class JavaStack extends Stack {
    public JavaStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public JavaStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        String stageName = "default";
        String partPath = "pets";
        StateMachineApiGatewayExample exampleConstruct = new StateMachineApiGatewayExample(this, "KerKer",
                StateMachineApiGatewayExampleProps.builder().stageName(stageName).partPath(partPath).build());

        new CfnOutput(this, "OStateMachine",
                CfnOutputProps.builder().value(exampleConstruct.getStateMachine().getStateMachineArn()).build());
        new CfnOutput(this, "OExecutionOutput", CfnOutputProps.builder().value(exampleConstruct.getExecutionInput())
                .description("Sample input to StartExecution.").build());
    }
}
