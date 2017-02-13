import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], filterBy: string): any[] { 
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((event: any) =>
            event.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}