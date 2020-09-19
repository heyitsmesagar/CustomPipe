import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'kmtomile'
})
export class KilometerToMilePipe implements PipeTransform {

    // tslint:disable-next-line:typedef
    transform(value: any, ...args: any[]) {
        const kilometerInMile = 1.6;
        if (!isNaN(value)){
            return value / kilometerInMile;
        }
        return null;
    }

}
