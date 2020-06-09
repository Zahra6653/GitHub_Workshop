function myFunction() {
	
	let x = document.getElementById("myText").value;
	let y = confirm("Is "+ x + " your name ? ");
	if(y!=null)
	{
		alert(x + ", Welcome to Digi-Safari Git Workshop! ");
	}
	}
function isleapyear()
{
	let year= document.getElementById("year").value; 
    let x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
	if(x===true)
		alert(year + " is a leap year....");
	else
		alert(year + " is not a leap year.....");
}