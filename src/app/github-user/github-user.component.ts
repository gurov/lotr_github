import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { GithubUser } from '../models';

@Component({
  selector: 'github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnChanges {

  constructor(private githubService: GithubService) { }

  @Input() name: string = ''; 
  errorMessage: string = '';
  user: GithubUser = new GithubUser();
  loading: boolean = false;

  ngOnChanges(): void {
    this.errorMessage = '';
    if (this.name) {
      this.loading = true;
      this.githubService.getUser(this.name)
        .subscribe(user => {
          this.user = user;
          this.loading = false;
        }, error => {
          this.user = new GithubUser();
          this.errorMessage = error?.error?.message || "Not found";
          this.loading = false;
        });
    } else {
      this.user = new GithubUser();
    }
  }

}
