import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-challenge',
  templateUrl: './code-challenge.component.html',
  styleUrls: ['./code-challenge.component.css']
})
export class CodeChallengeComponent implements OnInit {

  title = "this is a test";
  total = 0;
  max = 0;
  min = 0;
  mean = 0;
  items = [1, 2, 3];
  numbers = [];

  correctSort(a , b){
    return a - b;
  }

  submit($event) {
    if(isNaN(Number($event.target.value)) === false){
    (this.numbers.push(Number($event.target.value)));
    this.numbers.sort(this.correctSort)
    $event.target.value = null;
    // console.log(this.numbers);
  }
  else{
    alert("That's not a number bro...")
  }
}

  clear() {
    this.total = 0;
    this.max = 0;
    this.min = 0;
    this.mean = 0;
    this.numbers = [];
  }

  calcMax() {
    for (var i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] > this.max) {
        this.max = this.numbers[i]
      }
    }
    // console.log("The max is: " + this.max)
    this.calcMin();
  }

  calcMin(){
    this.min = Math.min.apply(Math, this.numbers)
    // console.log("the min is:" + this.min)
    this.calcMean();
    }

  calcMean() {
    for (var i = 0; i < this.numbers.length; i++) {
      this.total = this.total + this.numbers[i];
    }
    this.mean = this.total / this.numbers.length
    // console.log("the mean is: " + this.mean)
    this.calcMode();
  }

  maxCount = 0;
  count = 0;
  mode = 0;

  calcMode() {
    for (var i = 0; i < this.numbers.length; i++) {
      this.count = 0;
      for (var j = 0; j < this.numbers.length; j++){
        if(this.numbers[j] == this.numbers[i]){
          this.count++;
        }
      }
      if (this.count > this.maxCount) {
        this.maxCount = this.count;
        this.mode = this.numbers[i];
      }
    }
    console.log(this.mode)
  }








  //       if( this.numbers[i] === this.numbers[i+1] ){
  //         this.count++;
  //         console.log(this.count)
  //       }
  //       if(this.count > this.topCount){
  //         this.mode = this.numbers[i];
  //         this.topCount = this.count;
  //         this.count = 0;
  //       }
  //     }
  //   console.log(this.mode);
  // }


  constructor() { }

  ngOnInit() {
  }

}
