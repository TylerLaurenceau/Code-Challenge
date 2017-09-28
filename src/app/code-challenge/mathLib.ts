import { Injectable } from '@angular/core';

@Injectable()

export class MathLib {

  calcMin(input: number[]): number {
    if (input.length !> 0){
      return Math.min.apply(Math, input);
    }
    return NaN;
  }

  calcMode(input: number[]): number {
    for (var i = 0; i < input.length; i++) {
      let count = 0;
      let maxCount = 0;
      let mode = 0;
      for (var j = 0; j < input.length; j++) {
        if (input[j] == input[i]) {
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
        if(maxCount > 1){
        mode = input[i]
        return mode;
      }
      else{
        return NaN;
      }
      }
    }
  }

};
