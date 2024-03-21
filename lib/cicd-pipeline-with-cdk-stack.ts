import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, CodeBuildStep } from 'aws-cdk-lib/pipelines';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';
//import { MyPipelineAppStage} from './stage';

export class CicdPipelineWithCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this,'Pipeline',{
      pipelineName:'TestPipeline',
      synth: new CodeBuildStep('synth', {
        input: CodePipelineSource.gitHub('EveWangUW/CICD-Pipeline-with-CDK', 'main'),
        commands:['npm install',
                  'npm run build',
                  'npx cdk synth']
      }),
    });
    
  }
}
