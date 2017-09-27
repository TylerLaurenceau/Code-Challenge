import { trigger, state, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-challenge',
  templateUrl: './code-challenge.component.html',
  styleUrls: ['./code-challenge.component.css'],
  animations:[
    trigger('fade', [

      state('void', style({opacity: 0})),
      transition(':enter, :leave', [
        animate(500)
      ]),
    ])

  ]
})
export class CodeChallengeComponent implements OnInit {

  numbers = [];

  total = 0;
  max = 0;
  min = 0;
  mean = 0;
  fixedMean = 0;
  mode = 0;

  titles = [". Code Challenge .", ". Tyler Laurenceau ."]
  titleTracker = 0;
  currentTitle = this.titles[this.titleTracker];

  nextTitle() {
    this.titleTracker = this.titleTracker + 1;
    this.currentTitle = this.titles[this.titleTracker]
    if (this.titleTracker > 1) {
      this.titleTracker = 0;
      this.currentTitle = this.titles[this.titleTracker]
    }
    setTimeout(() => { this.nextTitle() }, 5000);
  }

  correctSort(a, b) {
    return a - b;
  }

  submit($event) {
    if (isNaN(Number($event.target.value)) === false) {
      if($event.target.value != 0){
      (this.numbers.push(Number($event.target.value)));
      this.numbers.sort(this.correctSort)
      $event.target.value = null;
    }
  }
    else {
      alert("That's not a number bro...")
    }
  }

  clear() {
    this.total = 0;
    this.max = 0;
    this.min = 0;
    this.mean = 0;
    this.fixedMean = 0;
    this.mode = 0;
    this.numbers = [];
  }

  calcMax() {
    if (this.numbers.length !> 0){
      for (var i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] > this.max) {
          this.max = this.numbers[i]
        }
      }
      // console.log("The max is: " + this.max)
      this.calcMin();
      this.total = 0;
    }
  else{
      alert("Enter some numbers and TRY AGAIN!");
    }
  }

  calcMin() {
    this.min = Math.min.apply(Math, this.numbers)
    // console.log("the min is:" + this.min)
    this.calcMean();
  }

  calcMean() {
    for (var i = 0; i < this.numbers.length; i++) {
      this.total = this.total + this.numbers[i];
    }
    this.mean = this.total / this.numbers.length;
    this.fixedMean = Number(this.mean.toFixed(2))
    // console.log("the mean is: " + this.mean)
    this.calcMode();
  }

  maxCount = 0;
  count = 0;

  calcMode() {
    for (var i = 0; i < this.numbers.length; i++) {
      this.count = 0;
      for (var j = 0; j < this.numbers.length; j++) {
        if (this.numbers[j] == this.numbers[i]) {
          this.count++;
        }
      }
      if (this.count > this.maxCount) {
        this.maxCount = this.count;
        if(this.maxCount > 1){
        this.mode = this.numbers[i];
      }
      else{
        this.mode = Number(NaN);
      }
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
