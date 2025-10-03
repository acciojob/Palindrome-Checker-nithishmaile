// complete the given function
const str=window.prompt("Enter word: ");

function palindrome(str){
	let reverseWord=""
	for(let i=str.length-1;i>=0;i--){
		reverseWord+=str[i];
	}
	if(reverseWord==str){
		return true
	}
	return false
}

alert(palindrome(str));
module.exports = palindrome
