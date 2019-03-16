var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits =0;
var guesses =0;

var isSunk = false;

while(isSunk== false)
{
   guess= prompt("Ready? , Go! Give me number from 1 to 6 : ")	;
   if (guess <0 || guess > 6 )
   {
	   alert("You give me wrong number!");
   }   
	 else {
        guesses = guesses +1;		 
   
	
	
	if (guess == location1 || guess == location2  || guess == location3 )
	{
		alert("HIT!");
		hits = hits + 1;
	
	    if(hits==3)
		{
			idSunk= true;
			alert("You sunk my ship!:(");
		}
	}	else 
	     {
			 alert("You missed!");
	     }
 
           }
	
}


var stats = "You needed " + guesses + " attems,to sink the ship, " + " so your efficiency is: " + (3/guesses) +".";
alert(stats);







