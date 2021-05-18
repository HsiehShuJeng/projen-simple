# How a successful deployment looks like  
![image](../../../images/typescript_stack.png)  

If you want to deploy the stack directly after cloning this repository, check the following commands.  
```bash
$ cd ${projen_root}
$ pj build
$ cdk --app lib/demo/typescript/typescript-stack.js deploy --profile scott.hsieh
```