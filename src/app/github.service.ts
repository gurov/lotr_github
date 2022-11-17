import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Commit, GithubUser, SearchWrapper } from './models';









							

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = environment.apiUrl;

  getUser(name: string): Observable<GithubUser> {
    return this.httpClient.get<GithubUser>(`${this.apiUrl}/users/${name}`);
  }

  getCommits(name: string): Observable<Commit[]> {
    return this.httpClient
      .get<SearchWrapper<Commit>>(`${this.apiUrl}/search/commits?q=${name}`)
      .pipe(map(wrapper => wrapper.items))
  }

}
