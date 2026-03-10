import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'emailType'})
export class EmailTypePipe implements PipeTransform {

  transform(email: string): string {
    if (!email) return '';

    return email.includes('@admiral.com')
      ? 'Company Email'
      : 'Personal Email' ;
  }
}
