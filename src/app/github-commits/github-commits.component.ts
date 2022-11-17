import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Commit } from '../models';

@Component({
  selector: 'github-commits',
  templateUrl: './github-commits.component.html',
  styleUrls: ['./github-commits.component.scss']
})
export class GithubCommitsComponent implements OnChanges {

  constructor(private githubService: GithubService) { }

  @Input() name: string = ''; 
  commits: Commit[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  ngOnChanges(): void {
    if (this.name) {
      this.loading = true;
      this.githubService.getCommits(this.name)
        .subscribe(commits => {
          this.commits = commits;
          this.loading = false;
        }, error => {
          this.commits = [];
          this.loading = false;
          this.errorMessage = error?.error?.message;
        });
    } else {
      this.commits = [];
    }
  }


}
