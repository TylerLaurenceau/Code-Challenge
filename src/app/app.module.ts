import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeChallengeComponent } from './code-challenge/code-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeChallengeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
