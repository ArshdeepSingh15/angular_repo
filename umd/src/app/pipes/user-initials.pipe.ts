import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'userInitials'})
export class UserInitialsPipe implements PipeTransform {

  transform(name: string): string {
    if (!name) return '';

    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }
}
