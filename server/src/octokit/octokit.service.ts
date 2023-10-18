import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from 'octokit';

@Injectable()
export class OctokitService extends Octokit {
  constructor(config: ConfigService) {
    super({ auth: config.get<string>('GITHUB_TOKEN') });
  }
}
