$("button").click(save)
function save(){
    event.preventDefault
    console.log(event)
    console.log(event.target.offsetParent)
    console.log(event.target.offsetParent.previousElementSibling.children[0].value)
    console.log(event.target.parentElement.previousElementSibling.previousElementSibling.innerHTML)
    var time =(event.target.parentElement.previousElementSibling.previousElementSibling.innerHTML)
    var task =(event.target.offsetParent.previousElementSibling.children[0].value)
    localStorage.setItem(time,task)
}


//figure out way to loop through rows or local storage to display to getItem from local storage as soon as it's loaded
    //ids for each row and pull /tags
    //styling

$("#currentDay").text(moment().format('dddd')+", "+ moment().format('MMMM Do'));  

// m = moment('2013-03-01', 'YYYY-MM-DD')
// var dt = new Date();
// var daytime = dt.getDay() + " " + dt.getMonth() + " " + dt.getDate();
// var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
// console.log(moment());


console.log(moment)
// var today = new Date();
// var dd = today.getDate();


