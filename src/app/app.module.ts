import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {HttpClientModule} from "@angular/common/http";
import {CalcService} from "./Service/calc.service";
import { InputComponent } from './calculator/input/input.component';
import { OutputComponent } from './calculator/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    InputComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CalcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
