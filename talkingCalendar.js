const talkingCalendar = function (date) {

  let arr = date.split("/");
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getMonth =  function(arr) {
    let index = arr[1]-1;
    return month[index];
  };

  const getDate = function(){
  let convertNumber = Number(arr[2])
   if(arr[2] == 1){
     return ` ${convertNumber}st, `;
   }
   if(convertNumber === 2){
     return ` ${convertNumber}nd, `;
   }
   if(convertNumber === 3){
     return ` ${convertNumber}rd, `;
   }
   if(convertNumber >= 4){
     return ` ${convertNumber}th, `;
   }
  }

  const getYear = function(){
    return arr[0]
  }
  return getMonth(arr) + getDate() + getYear(); 
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/04"));
console.log(talkingCalendar("1987/08/24"));
