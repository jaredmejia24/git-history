import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OctokitService } from 'src/octokit/octokit.service';

@Injectable()
export class GithubService {
  constructor(
    private config: ConfigService,
    private octokit: OctokitService,
  ) {}

  async getCommits() {
    const res = await this.octokit.request(
      'GET /repos/{owner}/{repo}/commits',
      {
        owner: 'jaredmejia24',
        repo: 'git-history',
      },
    );

    return res.data;
  }
}
