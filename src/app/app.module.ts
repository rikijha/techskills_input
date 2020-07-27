import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { TechskillsFaInputComponent } from './lib/techskills-fa-input/techskills-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';
import { TechskillsInpuModule } from './lib/techskills-input.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TechskillsInpuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
