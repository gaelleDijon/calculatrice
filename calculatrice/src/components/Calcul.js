class Calcul extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ result: "" });
  }
  calculate({ num, operator, operand }) {
    const result = null;
    switch (operator) {
      case "+":
        result = add(num, operands);
        console.log("addition ", result);
        break;
      case "-":
        result = substract(num, operands);
        console.log("soustraction ", result);
        break;
      case "*":
        result = multiply(num, operands);
        console.log("multiplication ", result);
        break;

      case "/":
        result = divide(num, operands);
        console.log("division ", result);
        break;
    }
    return result;
  }
  add(num, oper) {
    return num + oper;
  }
  substract(num, oper) {
    return num - oper;
  }
  multiply(num, oper) {
    return num * oper;
  }
  divide(num, oper) {
    if (oper == 0) {
      return "not defined";
    }
    return num / oper;
  }
}
