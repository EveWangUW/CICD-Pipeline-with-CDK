#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CicdPipelineWithCdkStack } from '../lib/cicd-pipeline-with-cdk-stack';

const app = new cdk.App();
//class structure being defined
new CicdPipelineWithCdkStack(app, 'CicdPipelineWithCdkStack', {
  env:{
    account:'033752409409',
    region:'us-west-2',
  }
});

app.synth();
//bootstrap引导 the process