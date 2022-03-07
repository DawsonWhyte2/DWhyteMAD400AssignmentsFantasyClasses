import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'classTypeFilter'
})
export class ClassTypeFilterPipe implements PipeTransform {

  transform(classList: Content[], tagsArrayLength?: number): Content[] {
      return classList.filter(fantasyclass => {
        console.log("Tags Array Length is " + tagsArrayLength);
        return tagsArrayLength ? tagsArrayLength === fantasyclass.tags?.length : (fantasyclass.tags == null || fantasyclass.tags.length === 0);
    });
  }

}
