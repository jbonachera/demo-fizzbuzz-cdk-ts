import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as path from 'path';

export class CdkFizzbuzzStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const postHandler = new lambda.Function(this, 'FizzBuzzSolverPostHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.PostHandler',
      code: lambda.Code.fromAsset(path.join(__dirname, '..', 'src')),
    });
    const getHandler = new lambda.Function(this, 'FizzBuzzSolverGetHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.GetHandler',
      code: lambda.Code.fromAsset(path.join(__dirname, '..', 'src')),
    });


    const api = new apigateway.RestApi(this, 'fizzbuzz', { deployOptions: { stageName: 'v1' } });

    const items = api.root.addResource('fizzbuzz');
    items.addMethod('POST', new apigateway.LambdaIntegration(postHandler));
    items.addMethod('GET', new apigateway.LambdaIntegration(getHandler));
  }
}
