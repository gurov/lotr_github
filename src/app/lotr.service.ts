import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, Wrapper } from './models';


export const removeUmlauts = (s: string): string => {
  return s.replace(/[áâä]/g, 'a')
    .replace(/[úû]/g, 'u')
    .replace(/[éêë]/g, 'e')
    .replace(/[óôö]/g, 'o')
    .replace(/[íî]/g, 'i');
}


const compareCharacters = (a: Character, b: Character): number => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

@Injectable({
  providedIn: 'root'
})
export class LotrService {

  constructor(private httpClient: HttpClient) { }


  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Wrapper<Character>>('assets/chars.json')
      .pipe(
        map(data => data.docs.sort(compareCharacters)),
        map(characters => characters.map(c => ({
          ...c,
          name_en: removeUmlauts(c.name).toLowerCase()
        })))
      );
  }

}
