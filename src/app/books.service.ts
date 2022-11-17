import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Author, Wrapper } from './models';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

  constructor(private httpClient: HttpClient) { }

  getAuthors(name: string): Observable<Author[]> {
    return this.httpClient.get<Wrapper<Author>>(`https://openlibrary.org/search/authors.json?q=${name}`)
      .pipe(map(data => data.docs));
  }


}
