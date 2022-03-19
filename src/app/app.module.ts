import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { SplitPipe } from './split.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    ExercicesComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
