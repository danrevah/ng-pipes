import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../helpers/helpers';

@Pipe({ name: 'ucFirstLcRest' })
export class UcFirstLcRestPipe implements PipeTransform {
  transform(input: string): string;
  transform(input: any): any;

  transform(text: any): any {
    
    if (isString(text)) {
      return text[0].toUpperCase() + 
      text.substring(1, text.length).toLowerCase();
    }

    return text;
  }
}
