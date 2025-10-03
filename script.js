// complete the given function


function palindrome(str){
	let reverseWord=""
	for(let i=str.length-1;i>=0;i--){
		reverseWord+=str[i];
	}
	return reverseWord
}
module.exports = palindrome
