//Experimental code: the idea is that you'll get a new greeting each day of the week and each greeting will be a different sundial motto. I envision that I could even include this on my planned blog.....



let now = new Date ();


//Test code to get index
function dayIndex(date) {
  return date.getDay();
}

function sundialGreeter(day) {
  let dayResult = dayIndex(now)
  return sunDialMottos.get(dayResult);
}


let sunDialMottos = new Map();

//SunDial Mottos in Map
sunDialMottos.set(0, "Begone about Thy business.");
sunDialMottos.set(1, "Beware of one hour.");
sunDialMottos.set(2, "Our last hour is hidden from us, so that we watch them all.");
sunDialMottos.set(3, "I have seen that nothing under the sun endures.");
sunDialMottos.set(4, "One hour will give what another has refused.");
sunDialMottos.set(5, "Now is the time to drink.");
sunDialMottos.set(6, "I hope for light to follow darkness.");
