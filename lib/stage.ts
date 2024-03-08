import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyLambdaStack } from './lambda-stack';

export class MyPipelineAppStage extends cdk.Stage {
  constructor(scope: Construct, stageName: string, props?: cdk.StageProps) {
    super(scope, stageName, props);

    // Create an instance of MyLambdaStack
    const lambdaStack = new MyLambdaStack(this, 'LambdaStack', stageName);

    // Add other stack instances or configurations if needed
  }
}