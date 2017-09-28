import { trigger, state, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MathLib } from './mathLib';

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

  userInput: number[] = [];

  total: number = 0;
  max: number = 0;
  min: number = 0;
  mean: number = 0;
  fixedMean: number = 0;
  mode: number = 0;
  maxCount: number = 0;
  count: number = 0;

  constructor(private mathLib:MathLib) { }

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
      (this.userInput.push(Number($event.target.value)));
      this.userInput.sort(this.correctSort)
      $event.target.value = null;
    }
  }
    else {
      alert("Please enter a number or decimal EX: 10 or .10 ")
    }
  }

  clear() {
    this.total = 0;
    this.max = 0;
    this.min = 0;
    this.mean = 0;
    this.fixedMean = 0;
    this.mode = 0;
    this.userInput = [];
    this.count = 0;
    this.maxCount = 0;
  }

  calcMax() {
      for (var i = 0; i < this.userInput.length; i++) {
        if (this.userInput[i] > this.max) {
          this.max = this.userInput[i]
        }
      this.total = 0;
    }
  }


  calcMin() {
    this.min = this.mathLib.calcMin(this.userInput);
    if( this.min !== NaN ){
    setTimeout(() => { this.calcMode() }, 700)
  }
  else{
    alert("Enter some numbers and TRY AGAIN!");
  }
}

  calcMean() {
    this.mean = 0;
    for (var i = 0; i < this.userInput.length; i++) {
      this.total = this.total + this.userInput[i];
    }
    this.mean = this.total / this.userInput.length;
    this.fixedMean = Number(this.mean.toFixed(2))
    setTimeout(() => { this.calcMax() }, 700)
  }

  calcMode() {
    for (var i = 0; i < this.userInput.length; i++) {
      this.count = 0;
      for (var j = 0; j < this.userInput.length; j++) {
        if (this.userInput[j] == this.userInput[i]) {
          this.count++;
        }
      }
      if (this.count > this.maxCount) {
        this.maxCount = this.count;
        if(this.maxCount > 1){
        this.mode = this.userInput[i];
      }
      else{
        this.mode = Number(NaN);
      }
      }
    }
    setTimeout(() => { this.calcMean() }, 700)
  }
  ngOnInit() {
  }
}
