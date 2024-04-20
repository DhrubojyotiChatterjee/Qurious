function slide(emp,l,ques,check3,ln) {
var emp; // Image
var ln;
var i = 0;
var x;
var ques; //SlideNo
var ans = [];
var check3; // Ans
var c = [];
var l; // link
var z;
var n;
var elem;
document.addEventListener("keydown", function(event) {
	if (event.key == "ArrowRight" && i <= ln-1) {
		i++;
		emp.src = l + i + ".jpg";
	} else if (event.key == "ArrowLeft" && i >= 2) {
		i--;
		emp.src = l + i + ".jpg";
	} else if (event.key == "Enter") {
		for (n=0;n<=ques.length;n++) {
			if (i == ques[n]) {
				for (x=1;x<=3;x++) {
					var val = prompt("Enter for Q"+x+": ");
					ans.push(val); 
				}
				for (elem = 0;elem<=check3.length;elem++) {
					if (elem == n) {
						for (z=0;z<=2;z++) {
					if (check3[elem][z] == ans[z]) {
						c.push("Correct");
					} else {
						c.push("Incorrect");
					}
				}
				alert("Q1: "+c[0]+"\nQ2: "+c[1]+"\nQ3: "+c[2]);
				c = [];
				ans = [];
					}
				}
			}
			
			}
	}
});
}