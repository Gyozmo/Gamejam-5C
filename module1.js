$(document).ready(function(){

    var data = [

    {
        image : ["url(images/patate-germe.png)","url(images/route.jpg)","url(images/ground.png)"]
    },
    {
        image : ["url(images/burger.png)","url(images/foot.png)","url(images/ground.png)"]
    },
    {
        image : ["url(images/patate-germe.png)","url(images/route.jpg)","url(images/ground.png)"]
    },
    {
        image : ["url(images/burger.png)","url(images/route.jpg)","url(images/ground.png)"]
    },
    {
        image : ["url(images/patate-germe.png)","url(images/route.jpg)","url(images/ground.png)"]
    },
    {
        image : ["url(images/burger.png)","url(images/route.jpg)","url(images/ground.png)"]
    },
    {
        image : ["url(images/patate-germe.png)","url(images/route.jpg)","url(images/ground.png)"]
    },
    {
        image : ["url(images/epic-win.gif)","url(images/crying-potato.png)","url(images/try-again.png)"]
    }
    ]


    var end = [
    {
        image : ["url(images/small-logo.png)","url(images/crying-potato.png)","url(images/try-again.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/crying-potato.png)","url(images/try-again.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/crying-potato.png)","url(images/try-again.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/crying-potato.png)","url(images/try-again.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/crying-potato.png)","url(images/try-again.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/crying-potato.png)","url(images/try-again.png)"]
    },
    {
        image : ["url(images/small-logo.png)","url(images/crying-potato.png)","url(images/try-again.png)"]
    },
    {
        image : ["url(images/epic-win.gif)","url(images/crying-potato.png)","url(images/try-again.png)"]
    }
    ]


    $("#restart").click(function(){
        i=0;
        $("#centre").css("background-image",data[i].image[0]);
        $("#top").css("background-image",data[i].image[1]);
        $("#bottom").css("background-image",data[i].image[2]);
        $("#restart").prop("disabled",true);
    });

    $("#restart").prop("disabled",true);
    


    var i=0;
    
    $("#centre").css("background-image",data[i].image[0]);
    $("#top").css("background-image",data[i].image[1]);
    $("#bottom").css("background-image",data[i].image[2]);

    $("#top").click(function(){
        console.log(i)
        if(i%2 !=0) {
            i++;
            $("#centre").css("background-image",data[i].image[0]);
            $("#top").css("background-image",data[i].image[1]);
            $("#bottom").css("background-image",data[i].image[2]);
        }
        else {
            $("#centre").css("background-image",end[i].image[0]);
            $("#top").css("background-image",end[i].image[1]);
            $("#bottom").css("background-image",end[i].image[2]);
            $("#restart").prop("disabled",false);

            
        }

    });

    $("#bottom").click(function(){
        console.log(i)
        if(i%2 ==0) {
            i++;
            $("#centre").css("background-image",data[i].image[0]);
            $("#top").css("background-image",data[i].image[1]);
            $("#bottom").css("background-image",data[i].image[2]);
        }
        else {
            $("#centre").css("background-image",end[i].image[0]);
            $("#top").css("background-image",end[i].image[1]);
            $("#bottom").css("background-image",end[i].image[2]);
            $("#restart").prop("disabled",false);
        }

    });


    
});
    