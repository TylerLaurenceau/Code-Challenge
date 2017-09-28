import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeChallengeComponent } from './code-challenge/code-challenge.component';
import { MathLib } from './code-challenge/mathLib';

@NgModule({
  declarations: [
    AppComponent,
    CodeChallengeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MathLib],
  bootstrap: [AppComponent]
})
export class AppModule { }
