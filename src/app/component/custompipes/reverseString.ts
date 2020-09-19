import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class RevrseStr implements PipeTransform {

    // tslint:disable-next-line:typedef
    transform(value: string, before: string, after: string): string {
        const newStr = `${before} ${value} ${after}`;
        return newStr;
    }

}
