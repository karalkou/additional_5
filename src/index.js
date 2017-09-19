module.exports = function check(str, bracketsConfig) {
    let strArr = str.split(''),
        tokens = bracketsConfig,
        stack = [];

    for( let i=0; i<strArr.length; i+=1 ){
        if( isOpenBracket(strArr[i] ) ){
            stack.push(strArr[i])
        }else{
            if (stack.length === 0
                ||
                !isMatches( stack.pop(), strArr[i] )
            ) {
                return false;
            }
        }
    }
    /*-------------------------- helpers --------------------------*/
    function isOpenBracket(currentItem) {
        for (let j=0; j<tokens.length; j+=1) {
            if (tokens[j][0] === currentItem) {
                return true;
            }
        }
        return false;
    }

    function isMatches(topOfStack, closingBracket) {
        for (let k=0; k<tokens.length; k+=1) {
            if (
                tokens[k][0] === topOfStack
                &&
                tokens[k][1] === closingBracket
            ) {
                return true;
            }
        }
        return false;
    }
    /*-------------------------- \helpers --------------------------*/

    return stack.length === 0;
};