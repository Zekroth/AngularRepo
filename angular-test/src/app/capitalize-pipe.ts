import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePipe'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): unknown {
    let result : string = '';
    value.split(' ').forEach(x =>{
      let word = '';
      if(x.charAt(0) != undefined){
        if(x.charAt(0).match('[a-z]')){
          let c = x.charAt(0).toUpperCase();

          if(x.length > 1){
            word = c + x.substr(1,x.length -1);
          }
        }
        result += (word + " ");

      }else{
        console.log(x);
      }
    });
    let r = new String(result);
    return r.trim();
  }

}
