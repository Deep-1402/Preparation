let today = new Date();
// Date(year, monthIndex, date, houres, minutes, seconds, miliseconds)
today = new Date(2025, 1, 14, 7, 55,26);
// console.log(specificDate);
// specificDate = new Date('2025-07-18');
// console.log(specificDate);
// get 
console.log(today.getDate());
console.log(today.getMonth()); 
console.log(today.getFullYear()); 
console.log(today.getHours()); 
console.log(today.getMinutes()); 
console.log(today.getSeconds()); 
console.log(today.getTime()); 
// set
// today.setDate(23); 
// today.setMonth(3);
// today.setFullYear(2024); 
// today.setHours(10); 
// today.setMinutes(45); 
// today.setSeconds(49); 

// to stringg
date = new Date();
console.log(date.toDateString());    
console.log(date.toLocaleDateString());





const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 today = new Date();
const currentMonthName = months[ today.getMonth() ];
console.log(currentMonthName,today)