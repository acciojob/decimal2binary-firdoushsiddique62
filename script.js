 function decimalToBinary(num) {
  //Write you code here
	let ans = "";
	while(num>=1){
		ans = num%2 + ans;
		num = Math.floor(num/2);
// 		console.log(num);
	}
  return ans;
}

window.decimalToBinary = decimalToBinary;