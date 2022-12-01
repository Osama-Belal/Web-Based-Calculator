package com.example.calculatorapplication;

public class Expression {
    private String operand1;
    private String operator;
    private String operand2;

    public Expression() {

    }

    public String getOperand1() {
        return operand1;
    }

    public String getOperator() {
        return operator;
    }

    public String getOperand2() {
        return operand2;
    }

    public void setOperand2(String operand2) {
        this.operand2 = operand2;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public void setOperand1(String operand1) {
        this.operand1 = operand1;
    }
}
