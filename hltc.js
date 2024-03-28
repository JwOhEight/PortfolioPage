import data from './emails.json' assert { type: 'json'};

// Get today's date
let todayNum = new Date();
let todayDOW = todayNum.getDay();

// Format the date as a string
let dateStringNum = todayNum.toLocaleDateString();
let dateStringDOW = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(todayNum);

// Get the HTML element
let dateDOW = document.getElementsByClassName('head-utils-date-DOW')[0];
let dateNumbers = document.getElementsByClassName('head-utils-date-numbers')[0];

// Update the text of the element
dateNumbers.textContent = dateStringNum;
dateDOW.textContent = dateStringDOW;


// console.log(data.emails[0].title);
// console.log(data.emails[0].email);
// console.log(data.emails[0].emailaddress);
// console.log(data.emails[0].topics);
// console.log(data.emails[0].category);

// console.log(data.emails[0].choices[2].sender);

const email1 = document.getElementsByClassName('.emailPage-message-body-paragraph');
console.log(email1.textContent);

