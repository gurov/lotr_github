import { Pipe, PipeTransform } from '@angular/core';
import { Character } from './models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Character[], searchText: string): Character[] {
    if (!searchText) {
      return items;
    }
    return items.filter(item => {
      return item.name_en.includes(searchText.toLowerCase());
    });
  }

}
