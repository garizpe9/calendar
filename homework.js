//var timeblock = loop to get ID
function seeid(){
    $(".hour").each(function(){
        var stamp =$(this).attr("id")
        var dt = new Date();
        var time = Math.floor(dt.getHours())
        if (stamp.toString() === time.toString()){
            console.log(stamp);
            console.log(time);
            $(this.nextElementSibling).addClass("present");
            
        }   
        
    })   
}

seeid()


    



//local storage
$("button").click(save)
function save(){
    event.preventDefault
    var task = (event.target.previousElementSibling.value)
    var timebtn = (event.target.previousElementSibling.previousElementSibling.innerHTML)
    localStorage.setItem(timebtn,task)
}


//figure out way to loop through rows or local storage to display to getItem from local storage as soon as it's loaded
    //ids for each row and pull /tags
    //styling
//Time 
$("#currentDay").text(moment().format('dddd')+", "+ moment().format('MMMM Do')); 

//Time formatting
 var dt = new Date();
 var time = Math.floor(dt.getHours());
 var timestring = time.toString()




// var today = new Date();
// var dd = today.getDate();


