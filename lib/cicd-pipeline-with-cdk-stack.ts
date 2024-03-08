import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, CodeBuildStep } from 'aws-cdk-lib/pipelines';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';
//import { MyPipelineAppStage} from './stage';

export class CicdPipelineWithCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this,'Pipeline2',{
      pipelineName:'TestPipeline2',
      synth: new CodeBuildStep('synth', {
        input: CodePipelineSource.gitHub('EveWangUW/CICD-Pipeline-with-CDK', 'main'),
        commands:['npm install',
                  'npm run build',
                  'npx cdk synth']
      }),
      primaryOutputDirectory: "infrastructure/cdk.out",
    });
  }
}
