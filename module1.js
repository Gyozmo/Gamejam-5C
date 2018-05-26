$(document).ready(function(){

var data = [

    // Objet 0
    {
        title : "Germe",
        image : "url(images/germe.jpg)",
        index : 0
        /*options : [
        {
            title : "Planter" ,
            target : 1
            
        } ,
*/
    },
    
    //Objet 1
    {
        title : "Planter" ,
        image : "url(images/route.jpg)",
        index : 1
    } ,
    
    //Objet 2
    {
        title : "Route" ,
        image : "url(images/terre.jpg)",
        index : 2
    },

    //Objet 3
    {
        title : "Route" ,
        image : "url(images/burger.png)",
        index : 3
    },


    //Objet 4
    {
        title : "Route" ,
        image : "url(images/foot.png)",
        index : 4
    },


    //Objet 5
    {
        title : "Route" ,
        image : "url(images/logo.png)",
        index : 5
    },

    
    //Objet 6
    {
        title : "Route" ,
        image : "url(images/logo.png)",
        index : 6
    },

    ]
    
    var i=0;
    
    $("#centre").css("background-image",data[i].image);
    $("#top").css("background-image",data[i+1].image);
    $("#bottom").css("background-image",data[i+2].image);
    
    
    
    
    
    /*
    $("#centre").css("background-image",data[i].image);
    $("#top").css("background-image",data[i+1].image);
    $("#bottom").css("background-image",data[i+2].image); */
    
    console.log();
    
    $("#top").click(function(){
        i = i + 4
        
        if (i%2 == 0) {
            $("#centre").css("background-image",data[i].image).attr("data-index",data[i].index);
            $("#top").css("background-image",data[i+1].image).attr("data-index",data[i+1].index);
            $("#bottom").css("background-image",data[i+2].image).attr("data-index",data[i+2].index);
        }else{
            $("#centre").css("background-image",data[i+3].image).attr("data-index",data[i+3].index);
            $("#top").css("background-image","none");
            $("#bottom").css("background-image","none");
        }
    
    
    });
    
    $("#bottom").click(function(){
    
    
    
    });
    
    
    
    
});
    