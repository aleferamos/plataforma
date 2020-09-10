$(document).ready(function(){

    $(".cad").click(function(){
        $(".login").toggle();
    });

    $(".close").click(function(){
        $(".login").toggle();
    });

    $(".btncont").click(function(){
        $(".texto").hide();
    });

    $(".active").click(function(){
        $(".texto").show();
    });
    

    $(".ent").click(function(){
        $(".login").hide();
    });


    $(".btncont").click(function(){
        $(".materias").toggle();
    });
    
    $(".mat").click(function(){
        $(".center").show();
    });

    $(".active").click(function(){
        $(".center").hide();
    });

    $(".active").click(function(){
        $(".materias").hide();
    });
  });
