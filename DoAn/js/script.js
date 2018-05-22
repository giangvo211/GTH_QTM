			function myFunction () {
				var x = "50%";
				var y = parseInt(document.getElementsByClassName('gtco-cover')[0].style.backgroundPositionY) + document.documentElement.scrollTop*0.05;

				// document.getElementsByClassName('gtco-cover')[0].style.backgroundPosition = "50% "+y+"px";						
		}

		window.onload = function () {
			
			myFunction();	

		}