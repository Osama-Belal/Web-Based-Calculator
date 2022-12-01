import {Component, Input, OnInit, Output} from '@angular/core';
import {CalcService} from "../../Service/calc.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input() result: string = '';

  constructor(public calcservice: CalcService) { }

  ngOnInit(): void { }

}
