import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DvorakKeyboardComponent } from './dvorak-keyboard/dvorak-keyboard.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { SplitPipe } from './split.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DvorakKeyboardComponent,
    ExercicesComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
