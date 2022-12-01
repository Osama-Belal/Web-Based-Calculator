import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from "rxjs";
import {Expression} from "../Expression";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";



@Injectable({
  providedIn: 'root'
})

export class CalcService {

  private _url: string = "http://localhost:8080";

  operand1: string = '';
  operator: string = '';
  operand2: string = '';

  result:string = '';

  constructor(private http : HttpClient) { }

  postFormula(expression: Expression){
    return this.http.post<string>(`${this._url}/calculate`, expression);
  }



  addNum(num: string) {
    if(this.operator == '') {
      if(num == '.' && this.operand1.includes('.')) return;
      this.operand1 += (num);
      console.log(this.operand1);
    }
    else {
      if(num == '.' && this.operand2.includes('.')) return;
      if(num == '0' && this.operator == '/') return;
      this.operand2 += (num);
      console.log(this.operand2);
    }
  }


  pressOperator(operator: string) {
    if(this.operand2 != '') {
      this.getAnswer();
    }
    this.operator = operator;
  }


  reciprocal(){
    this.operand1 = '1';
    this.operator = '/';
    this.operand2 = this.result;
    this.getAnswer();
  }

  sqrt(){
    this.operand2 = this.operand1;
    this.operator = 's';
    this.getAnswer();
  }

  sq(){
    this.operand2 = this.operand1;
    this.operator = '×';
    this.getAnswer();
  }

  per(){
    this.operand2 = '100';
    this.operator = '/';
    this.getAnswer();
  }

  negate(){
    this.operand2 = this.operand1;
    this.operator = '-';
    this.operand1 = '0';
    this.getAnswer();
  }

  clear() {
    if (this.operand2 != "") {
      this.operand2 = this.operand2.substr(0, this.operand2.length-1)
    }

    else if (this.operator != "") {
      this.operator = '';
    }

    else if (this.operand1 != "") {
      this.operand1 = this.operand1.substr(0, this.operand1.length-1)
    }
  }

  allClear() {
    this.operand1 = this.operand2 = this.operator = '';
    this.result = '';
  }

  calcAnswer() {
    if(this.operand1 == '' || this.operator == '' || this.operand2 == '')
      return;

    // send evaluation to server side
    // send request with the expression
    let expression: Expression = {
      operand1: this.operand1,
      operator: this.operator,
      operand2: this.operand2
    };

    this.postFormula(expression).subscribe((data) => {
      this.result = data;
      this.operand1 = data;
      console.log(data);
    });


    // evaluation in client side
    // for uploading purpose
    let formula = this.operand1 + (this.operator == '×' ? '*' : this.operator) + this.operand2;
    if(this.operator == 's')
      this.result = this.operand1 = Math.sqrt(Number(this.operand1)).toString();
    else
      this.result = this.operand1 = eval(formula);
  }

  getAnswer() {
    this.calcAnswer();
    this.operator = '';
    this.operand2 = '';
  }

}
