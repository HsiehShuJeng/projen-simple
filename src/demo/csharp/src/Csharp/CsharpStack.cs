using Amazon.CDK;
using ScottHsieh.Examples;

namespace Csharp
{
    public class CsharpStack : Stack
    {
        internal CsharpStack(Construct scope, string id, IStackProps props = null) : base(scope, id, props)
        {
            string stageName = "default";
            string partPath = "pets";

            var exampleConstruct = new StateMachineApiGatewayExample(this, "KerKer", new StateMachineApiGatewayExampleProps
            {
                StageName = stageName,
                PartPath = partPath
            });

            new CfnOutput(this, "OStateMachine", new CfnOutputProps
            {
                Value = exampleConstruct.StateMachine.StateMachineArn
            });
            new CfnOutput(this, "OExecutionOutput", new CfnOutputProps
            {
                Value = exampleConstruct.ExecutionInput,
                Description = "Sample input to StartExecution."
            });
        }
    }
}
