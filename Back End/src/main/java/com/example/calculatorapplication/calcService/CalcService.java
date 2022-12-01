package com.example.calculatorapplication.calcService;

import org.springframework.expression.Expression;
import org.springframework.stereotype.Service;

@Service
public class CalcService {

    String result = new String("");

    public String calcResult(double op1, char op, double op2){
        if(op == '/' && op2 == 0)
            return result = "Error";

        double answer = switch (op) {
            case '+' -> op1 + op2;
            case '-' -> op1 - op2;
            case '×' -> op1 * op2;
            case '/' -> op1 / op2;
            case '%' -> op1 / 100;
            case 's' -> Math.sqrt(op1);
            default  -> op1;
        };
        return result = String.valueOf(answer);
    }

}
