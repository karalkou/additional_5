module.exports = function check(str, bracketsConfig) {
    let strArr = str.split(''),
        tokens = bracketsConfig,
        stack = [];

    for( let i=0; i<strArr.length; i+=1 ){

        for(let j=0; j<tokens.length; j+=1) {

            /* similar open and close brackets */
            if (tokens[j][0] === tokens[j][1] && tokens[j][0] === strArr[i]) {
                if (stack[stack.length - 1] !== strArr[i]) {
                    stack.push(strArr[i]);
                    break;
                }else{
                    stack.pop();
                    break;
                }
            }

            /* different open and close brackets */
            if (tokens[j][0] === strArr[i]) {
                stack.push(strArr[i]);
                break;
            }else if( strArr[i] === tokens[j][1] ){
                if( stack.length === 0 ){
                    return false;
                }else{
                    if ( stack[stack.length-1] !== tokens[j][0] ){
                        return false;
                    }else{
                        stack.pop();
                    }
                }
            }
        }
    }

    return stack.length === 0;
};