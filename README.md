# Constraint Plugin for GraphQL Mesh

Constraint Plugin is a plugin for GraphQL Mesh that allows you to add validation rules to your GraphQL schema using the [graphql-constraint-directive](https://github.com/confuser/graphql-constraint-directive) library. This plugin enhances your API by enforcing constraints directly in your schema, making your API more robust and reliable.

## Installation

Before you can use the Constraint Plugin, you need to install it along with GraphQL Mesh if you haven't already done so. You can install these using npm or yarn.

```bash
npm install @dmamontov/graphql-mesh-constraint-plugin
```

or

```bash
yarn add @dmamontov/graphql-mesh-constraint-plugin
```

## Configuration

### Modifying tsconfig.json

To make TypeScript recognize the Constraint Plugin, you need to add an alias in your tsconfig.json.

Add the following paths configuration under the compilerOptions in your tsconfig.json file:

```json
{
  "compilerOptions": {
    "paths": {
       "constraint": ["node_modules/@dmamontov/graphql-mesh-constraint-plugin"]
    }
  }
}
```

### Adding the Plugin to GraphQL Mesh

You need to include the Constraint Plugin in your GraphQL Mesh configuration file (usually .meshrc.yaml). Below is an example configuration that demonstrates how to use this plugin:

```yaml
additionalTypeDefs:
  - node_modules/@dmamontov/graphql-mesh-constraint-plugin/esm/constraint-directive.graphql
  
plugins:
  - constraint:
      enabled: true
```

## Conclusion

Remember, always test your configurations in a development environment before applying them in production to ensure that everything works as expected.