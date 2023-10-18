import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { ConfigModule } from '@nestjs/config';
import { OctokitModule } from './octokit/octokit.module';

@Module({
  imports: [
    GithubModule,
    ConfigModule.forRoot({ isGlobal: true }),
    OctokitModule,
  ],
  providers: [],
})
export class AppModule {}
