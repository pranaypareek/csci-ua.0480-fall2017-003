var isBalanced = function(s) {
    var stack = [], balanced = true;

    for(var i = 0; i < s.length; i++) {
        var ch = s.charAt(i);    
        if (ch === '(') {
            stack.push(ch);
        } else if (ch === ')') {
            if (stack.length === 0) {
                balanced = false;
                break;
            } 
            stack.pop();
            return balanced;
        }
    }

    if (stack.length !== 0) {
        balanced = false;
    }

    return balanced;
};

console.log(isBalanced('()'));
console.log(isBalanced(')('));
console.log(isBalanced('()()'));
console.log(isBalanced('()())'));

