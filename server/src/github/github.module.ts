import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { OctokitModule } from 'src/octokit/octokit.module';

@Module({
  imports: [OctokitModule],
  controllers: [GithubController],
  providers: [GithubService],
})
export class GithubModule {}
