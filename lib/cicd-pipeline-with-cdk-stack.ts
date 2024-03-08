import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { ManualApprovalStep } from 'aws-cdk-lib/pipelines';
//import { MyPipelineAppStage} from './stage';

export class CicdPipelineWithCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this,'Pipeline1',{
      pipelineName:'TestPipeline1',
      synth: new ShellStep('synth', {
        input: CodePipelineSource.gitHub('EveWangUW/CICD-Pipeline-with-CDK', 'main'),
        commands:['npm ci',
                  'npm run build',
                  'npx cdk synth']
      }),
    });
  }
}
