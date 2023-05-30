import ES5Function from "./es5-function";
import ArrowFunctions from "./arrow-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameter from "./function-parenthesis-and-parameter";

function WorkingWithFunctions() {
    return(
        <div>
            <ES5Function/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameter/>
        </div>
    );
}

export default WorkingWithFunctions;