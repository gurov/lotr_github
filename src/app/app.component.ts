import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { GithubService } from './github.service';
import { LotrService } from './lotr.service';
import { Character } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  characters$: Observable<Character[]> = of([]);
  selectedName: string = 'adanel';
  searchText: string = '';

  constructor(private lotrService: LotrService, private githubService: GithubService) {}


  setSelectedName(name: string) {
    this.selectedName = name;
  }

  ngOnInit() {

    this.characters$ = this.lotrService.getCharacters();
  }


}
