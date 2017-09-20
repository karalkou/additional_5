module.exports = function check(str, bracketsConfig) {
    let strArr = str.split(''),
        tokens = bracketsConfig,
        stack = [];

    for( let i=0; i<strArr.length; i+=1 ){

        for(let j=0; j<tokens.length; j+=1) {
            if (tokens[j][0] === tokens[j][1] && tokens[j][0] === strArr[i]) {
                if (stack[stack.length - 1] !== strArr[i]) {
                    stack.push(strArr[i]);
                    break;
                }else{
                    stack.pop();
                    break;
                }
            }

            if (tokens[j][0] === strArr[i]) {
                stack.push(strArr[i]);
                break;
            }else if( strArr[i] === tokens[j][1] ){
                if( stack.length === 0 ){
                    return false;
                }else{
                    if ( strArr[i-1] === tokens[j][0] ){
                        stack.pop();
                    }else{
                        return false;
                    }
                }
            }else{
                break;
            }
        }




        /*------------------------------------------------------------------------------------------------------------*/
        /*if( isOpenBracket(strArr[i], strArr[i-1] ) ){
            // console.log('open bracket: ', strArr[i]);
            stack.push(strArr[i])
        }else{
            // console.log('close bracket: ', strArr[i]);
            if (stack.length === 0
                ||
                !isMatches( stack.pop(), strArr[i] )
            ) {
                return false;
            }
        }*/
    }
    /*-------------------------- helpers --------------------------*/
    function isOpenBracket(currentItem, prevItem) {

        for (let j=0; j<tokens.length; j+=1) {
            if (tokens[j][0] === currentItem) {
                return true;
            }
        }

        // console.log('currentItem: ', currentItem);
        // console.log('prevItem   : ', prevItem);
        /*if( !prevItem ){
            for (let j=0; j<tokens.length; j+=1) {
                if (tokens[j][0] === currentItem) {
                    return true;
                }
            }
        }else{
            for (let j=0; j<tokens.length; j+=1) {
                if ( tokens[j][0] === tokens[j][1] && tokens[j][0] === currentItem && currentItem === prevItem ) {
                    stack.pop();
                    return false;
                }else if( tokens[j][0] !== tokens[j][1] && tokens[j][0] === currentItem ){
                    return true;
                }

            }
        }*/

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