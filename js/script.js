
/*Script do scroll*/            
      jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
   });
});

/*=======================================*/

/* Efeito de focus nos campos(inputs) dos formularios*/
  $(document).ready(function(){
    $('input , textarea').focus(function(){
      $(this).css({'border':'solid #3498db 1px'
                  });
    });
    
    $('input , textarea').blur(function(){
      $(this).css({'border':'none'                    
                  });
    });
    
/*===========================================*/

/*Menu dropdown celular*/
      $('#sub-menu').hide();
      $('#btn-menu').click(function(){
        $('#sub-menu').toggle('slow');
        $('#top-bar').css("background-color","rgba(0,0,0,.8)");
      });
  });

  $('#sub-menu li').click(function(){
    $('#sub-menu').toggle('slow');
    $('#top-bar').css('background-color','rgba(0,0,0,.4)');
    
  });
/*====================================*/
