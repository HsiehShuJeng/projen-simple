# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StateMachineApiGatewayExample <a name="StateMachineApiGatewayExample" id="projen-statemachine-example.StateMachineApiGatewayExample"></a>

Converted from an AWS Blog post.

It is the first example mentioned in https://aws.amazon.com/tw/blogs/compute/introducing-amazon-api-gateway-service-integration-for-aws-step-functions/.
This constcut will create an API Gateway Rest API with two methods and
are manipulated by a state machine managed in AWS StepFucntions.

#### Initializers <a name="Initializers" id="projen-statemachine-example.StateMachineApiGatewayExample.Initializer"></a>

```typescript
import { StateMachineApiGatewayExample } from 'projen-statemachine-example'

new StateMachineApiGatewayExample(parent: Construct, name: string, props: StateMachineApiGatewayExampleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.Initializer.parameter.props">props</a></code> | <code><a href="#projen-statemachine-example.StateMachineApiGatewayExampleProps">StateMachineApiGatewayExampleProps</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="projen-statemachine-example.StateMachineApiGatewayExample.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="projen-statemachine-example.StateMachineApiGatewayExample.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="projen-statemachine-example.StateMachineApiGatewayExample.Initializer.parameter.props"></a>

- *Type:* <a href="#projen-statemachine-example.StateMachineApiGatewayExampleProps">StateMachineApiGatewayExampleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="projen-statemachine-example.StateMachineApiGatewayExample.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-statemachine-example.StateMachineApiGatewayExample.isConstruct"></a>

```typescript
import { StateMachineApiGatewayExample } from 'projen-statemachine-example'

StateMachineApiGatewayExample.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-statemachine-example.StateMachineApiGatewayExample.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.property.executionInput">executionInput</a></code> | <code>string</code> | sample input to start execution for the workflow. |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExample.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | the representation of a state machine. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-statemachine-example.StateMachineApiGatewayExample.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `executionInput`<sup>Required</sup> <a name="executionInput" id="projen-statemachine-example.StateMachineApiGatewayExample.property.executionInput"></a>

```typescript
public readonly executionInput: string;
```

- *Type:* string

sample input to start execution for the workflow.

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="projen-statemachine-example.StateMachineApiGatewayExample.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

the representation of a state machine.

---


## Structs <a name="Structs" id="Structs"></a>

### StateMachineApiGatewayExampleProps <a name="StateMachineApiGatewayExampleProps" id="projen-statemachine-example.StateMachineApiGatewayExampleProps"></a>

#### Initializer <a name="Initializer" id="projen-statemachine-example.StateMachineApiGatewayExampleProps.Initializer"></a>

```typescript
import { StateMachineApiGatewayExampleProps } from 'projen-statemachine-example'

const stateMachineApiGatewayExampleProps: StateMachineApiGatewayExampleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExampleProps.property.partPath">partPath</a></code> | <code>string</code> | The path part for the resource. |
| <code><a href="#projen-statemachine-example.StateMachineApiGatewayExampleProps.property.stageName">stageName</a></code> | <code>string</code> | A stage name for the rest api. |

---

##### `partPath`<sup>Required</sup> <a name="partPath" id="projen-statemachine-example.StateMachineApiGatewayExampleProps.property.partPath"></a>

```typescript
public readonly partPath: string;
```

- *Type:* string
- *Default:* 'pets'

The path part for the resource.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="projen-statemachine-example.StateMachineApiGatewayExampleProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string
- *Default:* 'default'

A stage name for the rest api.

---



