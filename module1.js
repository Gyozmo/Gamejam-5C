$(document).ready(function(){

var data = [

    // Objet 0
    {
        title : "Germe",
        image : "url(images/ballon.png)",
        index : 0
        /*options : [
        {
            title : "Planter" ,
            target : 1
            
        } ,
    
        {
            title : "Route" ,
            target : 2
            
        }] */
    },
    
    //Objet 1
    {
        title : "Planter" ,
        image : "url(images/burger.png)",
        index : 1
    } ,
    
    //Objet 2
    {
        title : "Route" ,
        image : "url(images/logo.png)",
        index : 2
    
    }
    
    ]
    
    var i=0;
    
    $("#centre").css("background-image",data[i].image);
    $("#top").css("background-image",data[i+1].image);
    $("#bottom").css("background-image",data[i+2].image);
    
    
    
    
    
    /*
    $("#centre").css("background-image",data[i].image);
    $("#top").css("background-image",data[i+1].image);
    $("#bottom").css("background-image",data[i+2].image); */
    
    console.log("ok");
    
    $("#top").click(function(){
        console.log("ok");
        
        console.log($(this));
        
        /*if ($(data[this].index) %2 == 0) {
            $("#centre").css("background-image",data[i].image);
            $("#top").css("background-image",data[i].image);
            $("#bottom").css("background-image",data[i].image);
        }else{
            $("#centre").css("background-image",data[i+3].image);
            $("#top").css("background-image","none");
            $("#bottom").css("background-image","none");
        }*/
    
    
    });
    
    $("#bottom").click(function(){
    
    
    
    });
    
    
    
    
});
    