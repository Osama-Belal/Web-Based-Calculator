import {Component, Input, OnInit} from '@angular/core';
import {Expression} from "../../Expression";
import {CalcService} from "../../Service/calc.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  constructor(private calcservice: CalcService) { }

  ngOnInit(): void { }

  do(_function: string, _variable: string){
    if(_function == 'op')
      this.calcservice.pressOperator(_variable);

    else if(_function == 'num')
      this.calcservice.addNum(_variable);

    else if(_function == 'undo')
      this.calcservice.clear();

    else if(_function == 'clear')
      this.calcservice.allClear();

    else if(_function == 'rec')
      this.calcservice.reciprocal();

    else if(_function == 'neg')
      this.calcservice.negate();

    else if(_function == 'per')
      this.calcservice.per();

    else if(_function == 'sq')
      this.calcservice.sq();

    else if(_function == 'sqrt')
      this.calcservice.sqrt();

    else if(_function == 'result')
      this.calcservice.getAnswer();

  }

}
