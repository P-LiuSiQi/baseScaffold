
export const getDate = function (date) {
  var time = (date?new Date(date):new Date());
  var month=time.getMonth()+1
  var dates = time.getDate()
  return time.getFullYear() + '-' + (month>9?month:'0'+month) + '-'+ (dates>9?dates:'0'+dates)
}
export const getMonth = function (date) {
  var time = (date?new Date(date):new Date());
  var month = time.getMonth() + 1
  return time.getFullYear() + '-' + (month > 9 ? month : '0' + month)
}
export const getSpecialDay = function (date,symbol,num) {
  let d = new Date(Date.parse(date.replace(/-/g, "/")));
  let yesterday
  if (symbol === '-') {
    yesterday = new Date(d.getTime()-num*1000*60*60*24);
  } else if (symbol === '+') {
    yesterday = new Date(d.getTime()+num*1000*60*60*24);
  }
  var year = yesterday.getFullYear(); //年
  var month = yesterday.getMonth() + 1; //月
  var day = yesterday.getDate(); //日
  var clock = year + "-";
  if (month < 10) {
    clock += "0";
    clock += month + "-";
  }
  if (day < 10) {
    clock += "0";
    clock += day;
  }
  return clock;
}
export const getDateTime = function (time) {
  var date = (time ? new Date(time) : new Date());
  var month=date.getMonth()+1
  var dates = date.getDate()
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
 return date.getFullYear() + '-' + (month>9?month:'0'+month) + '-'+ (dates>9?dates:'0'+dates) + ' ' + (hour>9?hour:'0'+hour) + ':' + (minutes>9?minutes:'0'+minutes) + ':' + (seconds>9?seconds:'0'+seconds)
}

export const getMillisecond = function (date) {
  let time = date.replace(new RegExp("-","gm"),"/")
  return (new Date(time)).getTime()
}
