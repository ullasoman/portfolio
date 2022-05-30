/* Preloader  */
    (function ($) {
        "use strict";
        
            function loading() {
                "use strict";
                $('.loading').delay(500).fadeOut(500);
            }
    // Window on Load
    $(window).on("load", function () {
        "use strict";
        loading();

    });
})(jQuery);

//********  fixed menu on scroll for desktop ************//

if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
        }   
    });
  } // end if

  $(document).ready(function(){   
    $("#frm_contact").submit(function(e){
    //e.preventDefault();
    e.stopImmediatePropagation();
    var user_name  = $('#user_name').val();
    var user_email  = $('#user_email').val();
    var user_phone  = $('#user_phone').val();
    var user_message  = $('#user_message').val();
     
  
    var name_regex      = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var phone_regex     = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    var email_reg       = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if(user_name == ""){
      $("#Err_1").html("Please fill this field");
      return false;
    }
    else if(!user_name.match(name_regex))
    {
      $("#Err_1").html("Special Characters not allowed");
      return false;
    }
    else if(user_email == "")
    {
      $("#Err_2").html("Please fill your email");
      return false;
    }
    else if(!user_email.match(email_reg))
    {
      $("#Err_2").html("You have entered an invalid email address!");
      return false;
    }
    else if(user_phone == "")
    {
      $("#Err_3").html("Please fill your email");
      return false;
    }
    else if(!user_phone.match(phone_regex))
    {
      $("#Err_3").html("You have entered an invalid phone number!");
      return false;
    }
    else if(user_message == "")
    {
      $("#Err_4").html("Please fill your message");
      return false;
    }
    
    //alert(5);
    
    else 
        {
            //alert (user_name);
            $.ajax({
                type:"POST",
                url:"query.php",           
                data:{stud_complaint:user_name,mode:"register_complaint"},
                beforeSend: function() { 
                  $("#submit").prop('disabled', true); // disable button
                },
                success:function(data)
                {
                  alert(data);
                  document.getElementById("frm_reg_complaint").reset();
                  window.location = 'register-complaint';
                  $("#submit").prop('disabled', false); // enable button
                }
           });
        }
        return false;
        });
    
    }); 