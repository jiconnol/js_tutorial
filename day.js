// Note to Self - I understand this code, but vaguely, please keep in mind to review it

// Returns the day of the week for the given date.

function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

//Attempt at creating a 'greeting' function for an alert!

function greeting(date) {
  return `Hello Hacker, welcome on this fine ${dayName(now)}`
};


//  let now = new Date();
//  alert(greeting(now));

//^^Reference code (index.html)
