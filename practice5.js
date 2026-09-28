function addage(age){
    if(age>10){
        console.log("he is"+ age)
    }
    else{
        console.log("he is a little child")
    }
}
addage(4)
addage(11)
function dishes(dish){
    if(dish == "plate"){
        console.log("he wants food")
    }
    else if(dish == "cup"){
        console.log("he wants tea")
    }
    else{
        console.log("he is not hungry")
    }
}
dishes("plate")
dishes("cup")
dishes("bowl")
function vehicle(type){
    if(type == "car"){
        console.log("malcolm loves cars")
    }
    else if(type == "motorcycle"){
        console.log("malcolm loves motorcycles")
    }
    else if(type == "bicycle"){
        console.log("malcolm loves bicycles")
    }
    else{
        console.log("malcolm loves none of these")
    }
}
vehicle("car")
vehicle("motorcycle")
vehicle("aeroplane")
function duration(time){
    console.log(time)
}
duration(2)
duration(3)
function distance(time, speed){
    console.log(time * speed)
}
distance(200, 4)
distance(7, 2)
distance(8, 5)
function checkmalcolmsage(numberofteeth){
    if(numberofteeth<10){
        console.log("malcolm is less than ten years old")
    }
    else if(numberofteeth>28&&numberofteeth<30){
        console.log("malcolm is above 18 years of age")
    }
    else if(numberofteeth>=10&&numberofteeth<=28){
        console.log("malcolm is teenager")
    } 
    else {
        console.log("malcolm is an adult")
    }   
}
checkmalcolmsage(10)
checkmalcolmsage(28)
checkmalcolmsage(29)
checkmalcolmsage(1000)