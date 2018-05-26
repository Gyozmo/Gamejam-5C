$(document).ready(function(){

var data = [

    // Objet 0
    {
        title : "Germe",
        image : "url(images/germe.jpg)",
        index : 0
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
        image : "url(images/fleur.png)",
        index : 5
    },

    
    //Objet 6
    {
        title : "Route" ,
        image : "url(images/small-logo.png)",
        index : 6
    },

     //Objet 7
     {
        title : "Route" ,
        image : "url(images/small-logo.png)",
        index : 7
    },
    ]
    
    var i=0;
    
    $("#centre").css("background-image",data[i].image).attr("data-index",data[i].index);
    $("#top").css("background-image",data[i+1].image).attr("data-index",data[i+1].index);
    $("#bottom").css("background-image",data[i+2].image).attr("data-index",data[i+2].index);
    
    
    
    
    $("#top").click(function(){
        i = i + 4;

        console.log($(this).data());
        var topindex = $(this).data();

        if (topindex%2 == 0) {
            $("#centre").css("background-image",data[i].image).attr("data-index",data[i].index);
            $("#top").css("background-image",data[i+1].image).attr("data-index",data[i+1].index);
            $("#bottom").css("background-image",data[i+2].image).attr("data-index",data[i+2].index);
        }else{
            $("#centre").css("background-image",data[i+3].image).attr("data-index",data[i+3].index);
            $("#top").css("background-image","");
            $("#bottom").css("background-image","");
        }
    
    
    });
    
    $("#bottom").click(function(){
        i = i + 4;
        console.log($(this).data());
        var bottomindex = $(this).data();

        if (bottomindex%2 == 0) {
            $("#centre").css("background-image",data[i].image).attr("data-index",data[i].index);
            $("#top").css("background-image",data[i+1].image).attr("data-index",data[i+1].index);
            $("#bottom").css("background-image",data[i+2].image).attr("data-index",data[i+2].index);
        }else{
            $("#centre").css("background-image",data[i+3].image).attr("data-index",data[i+3].index);
            $("#top").css("background-image","none");
            $("#bottom").css("background-image","none");
        }
    
    
    });
    
    
    
    
});
    