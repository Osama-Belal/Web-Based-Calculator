import { Component, OnInit } from '@angular/core';
import { CalcService } from "../Service/calc.service";
import {Expression} from "../Expression";

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent { //implements OnInit {

  operand1: string = '';
  operator: string = '';
  operand2: string = '';

  result:string = '';

  constructor(private calcService: CalcService) { }

  ngOnInit(): void {
  // //   let response = this.calcService.getResult()
  // //   response.subscribe(data => this.result = data)
  }

  //
  //
  //
  //
  //
  //
  //
  // addNum(num: string) {
  //   if(this.operator == '') {
  //     this.operand1 += (num);
  //     console.log(this.operand1);
  //   }
  //   else {
  //     this.operand2 += (num);
  //     console.log(this.operand2);
  //   }
  // }
  //
  //
  // pressOperator(operator: string) {
  //   if(this.operand2 != '') {
  //     this.getAnswer();
  //   }
  //   this.operator = operator;
  // }
  //
  //
  // reciprocal(){
  //   this.operand1 = '1';
  //   this.operator = '/';
  //   this.operand2 = this.result;
  //   this.getAnswer();
  // }
  //
  // sqrt(){
  //   this.operand2 = this.operand1;
  //   this.operator = 's';
  //   this.getAnswer();
  // }
  //
  // sq(){
  //   this.operand2 = this.operand1;
  //   this.operator = '*';
  //   this.getAnswer();
  // }
  //
  // negate(){
  //   this.operand2 = this.operand1;
  //   this.operator = '-';
  //   this.operand1 = '0';
  //   this.getAnswer();
  // }
  //
  // clear() {
  //   if (this.operand2 != "") {
  //     this.operand2 = this.operand2.substr(0, this.operand2.length-1)
  //   }
  //
  //   else if (this.operator != "") {
  //     this.operator = '';
  //   }
  //
  //   else if (this.operand1 != "") {
  //     this.operand1 = this.operand1.substr(0, this.operand1.length-1)
  //   }
  // }
  //
  // allClear() {
  //   this.operand1 = this.operand2 = this.operator = '';
  //   this.result = '';
  // }
  //
  // calcAnswer() {
  //   // send request with the expression
  //   let expression: Expression = {
  //     operand1: this.operand1,
  //     operator: this.operator,
  //     operand2: this.operand2
  //   };
  //
  //   console.log(expression);
  //
  //   this.calcService.postFormula(expression).subscribe((data) => {
  //     this.result = data;
  //     this.operand1 = data;
  //     console.log(data);
  //   });
  // }
  //
  // getAnswer() {
  //   this.calcAnswer();
  //   this.operator = '';
  //   this.operand2 = '';
  // }

}
