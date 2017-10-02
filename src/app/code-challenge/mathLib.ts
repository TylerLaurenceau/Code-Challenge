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
    var count = 0;
    var maxCount = 0;
    var mode = 0;
    for (var i = 0; i < input.length; i++) {
      count = 0;
      for (var j = 0; j < input.length; j++) {
        if (input[j] == input[i]) {
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
        if (maxCount > 1) {
          mode = input[i]
        }
      }
    }
    return mode;
  }

  calcMean(input: number[]) {
    var mean = 0;
    var total = 0;
    var fixedMean = 0;
    for (var i = 0; i < input.length; i++) {
      total = total + input[i];
    }
    mean = total / input.length;
    fixedMean = Number(mean.toFixed(2))
    return fixedMean;
  }


  calcMax(input: number[]) {
    var max = 0;
    var total = 0;
      for (var i = 0; i < input.length; i++) {
        if (input[i] > max) {
          max = input[i]
        }
       total = 0;
    }
    return max;
  }

};
