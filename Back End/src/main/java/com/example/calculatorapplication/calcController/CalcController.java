package com.example.calculatorapplication.calcController;

import com.example.calculatorapplication.Expression;
import com.example.calculatorapplication.calcService.CalcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class CalcController {

    @Autowired
    private CalcService calcservice;

//    @GetMapping("/result")
//    public String ans(){
//        return calcservice.calcResult();
//    }

    @PostMapping("/calculate")
    public String calculate(@RequestBody Expression expression){
        double op1 = Double.parseDouble(expression.getOperand1());
        char op = expression.getOperator().charAt(0);
        double op2 = Double.parseDouble(expression.getOperand2());

        return calcservice.calcResult(op1, op, op2);
    }

}
