
# How a successful deployment looks like
![image](../../../images/python_stack.png)  
## Deployment Reference  
```bash
$ cdk init --language python
$ cat <<EOL > requirements.txt
aws-cdk.core
scotthsieh_projen_statemachine
EOL
$ python -m pip install -r requirements.txt
```
```python
from aws_cdk import core as cdk
from scotthsieh_projen_statemachine import StateMachineApiGatewayExample

class PythonStack(cdk.Stack):
    def __init__(self, scope: cdk.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)
        
        stage_name = 'default'
        part_path = 'pets'
        example_construct = StateMachineApiGatewayExample(
            self, 'PythonStatemachne', stage_name=stage_name, part_path=part_path,
        )

        cdk.CfnOutput(self, "OStateMachine",
            value=example_construct.state_machine.state_machine_arn
        )
        cdk.CfnOutput(self, "OExecutionOutput", value=example_construct.execution_input, description="Sample input to StartExecution.")
```

# Welcome to your CDK Python project!

This is a blank project for Python development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

This project is set up like a standard Python project.  The initialization
process also creates a virtualenv within this project, stored under the `.venv`
directory.  To create the virtualenv it assumes that there is a `python3`
(or `python` for Windows) executable in your path with access to the `venv`
package. If for any reason the automatic creation of the virtualenv fails,
you can create the virtualenv manually.

To manually create a virtualenv on MacOS and Linux:

```
$ python3 -m venv .venv
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
$ source .venv/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```
% .venv\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip install -r requirements.txt
```

At this point you can now synthesize the CloudFormation template for this code.

```
$ cdk synth
```

To add additional dependencies, for example other CDK libraries, just add
them to your `setup.py` file and rerun the `pip install -r requirements.txt`
command.

## Useful commands

 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation

Enjoy!
