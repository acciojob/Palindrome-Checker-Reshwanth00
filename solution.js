// complete the given function

function palindrome(str){
    var i = 0;
    var j = str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            return false;
        }
    }
    return true;
}
module.exports = palindrome
