$(document).ready(function(){

var data = [

    // Objet 0

    {
        image : ["url(images/germe.jpg)","url(images/route.jpg)","url(images/terre.jpg)"]
    },

    {
        image : ["url(images/burger.png)","url(images/foot.png)","url(images/fleur.png)"]
    }
    ]


var end = [
    {
        image : ["url(images/small-logo.png)","url(images/small-logo.png)","url(images/small-logo.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/small-logo.png)","url(images/small-logo.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/small-logo.png)","url(images/small-logo.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/small-logo.png)","url(images/small-logo.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/small-logo.png)","url(images/small-logo.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/small-logo.png)","url(images/small-logo.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/small-logo.png)","url(images/small-logo.png)"]
    }
    ]



    var i=0;
    
    $("#centre").css("background-image",data[i].image[0]);
    $("#top").css("background-image",data[i].image[1]);
    $("#bottom").css("background-image",data[i].image[2]);

    $("#top").click(function(){
        if(i%2 !=0) {
        $("#centre").css("background-image",data[i].image[0]);
        $("#top").css("background-image",data[i].image[1]);
        $("#bottom").css("background-image",data[i].image[2])
    }
        else {
            $("#centre").css("background-image",end[i].image[0]);
            $("#top").css("background-image",end[i].image[1]);
            $("#bottom").css("background-image",end[i].image[2])
        }
        i++;

    });

    $("#bottom").click(function(){
        if(i%2 ==0) {
        $("#centre").css("background-image",data[i].image[0]);
        $("#top").css("background-image",data[i].image[1]);
        $("#bottom").css("background-image",data[i].image[2])
    }
        else {
            $("#centre").css("background-image",end[i].image[0]);
            $("#top").css("background-image",end[i].image[1]);
            $("#bottom").css("background-image",end[i].image[2])
        }
        i++;

    });

    
});
    