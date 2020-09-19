import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {KilometerToMilePipe} from './component/custompipes/KilometerToMile';
import {RevrseStr} from './component/custompipes/reverseString';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, KilometerToMilePipe, RevrseStr
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
