//variables

//Calendar time
$("#currentDay").text(moment().format('dddd')+", "+ moment().format('MMMM Do')); 

//var timeblock = loop to get ID
function seeid(){
    $(".hour").each(function(){
        var stamp =$(this).attr("id")
        var dt = new Date();
        var time = Math.floor(dt.getHours())
        if (parseInt(stamp) === parseInt(time)){
            $(this.nextElementSibling).addClass("present");
        }
        if (parseInt(stamp) < parseInt(time)){
            $(this.nextElementSibling).addClass("past");
        }
        if (parseInt(stamp) > parseInt(time)){
            $(this.nextElementSibling).addClass("future");
        }          
    })   
}
seeid()

//local storage
$("button").click(save)
function save(){
    event.preventDefault
    var task = (event.target.previousElementSibling.value);
    var timebtn = (event.target.previousElementSibling.previousElementSibling.innerHTML);
    localStorage.setItem(timebtn,task);    
}
$(".hour").each(function(){
    var bloop=($(this).html());
    ($(this).next().val(localStorage.getItem(bloop)));    
})
