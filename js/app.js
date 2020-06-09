function myFunction() {
	
	var x = document.getElementById("myText").value;
	var y = confirm("Is "+ x + " your name ? ");
	if(y!=null)
	{
		alert(x + ", Welcome to Digi-Safari Git Workshop! ");
	}
	}
