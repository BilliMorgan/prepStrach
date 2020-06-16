const talkingCalendar = function (date) {
  let newDate = "";
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const getMonth =  function(month, arr) {
    console.log(arr)
    console.log(month)
    let index = arr[1] - 1;
    console.log(index)

  }
  let arr = date.split("/");
  console.log(arr);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
