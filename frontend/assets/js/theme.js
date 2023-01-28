if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}
 var validTab = false;
$(document).ready(function(){
  $("footer").append('<div class=container><div class=row><div class=col-sm-3><a href=./index.html class=footer-logo><img src="./assets/img/White Logo.png"></a><p class=footer-content>People , Partnership and Passion are the heart of our success and drive everything we do .</div><div class=col-sm-3><h5>Menu</h5><ul><li><a href=./about-us.html>Who we are </a><li><a href=./services.html>What we do </a><li><a href=./register.html>Register</a><li><a href=./registration.html>Newsletter</a><li><a href=./contact-us.html>contact Us</a></ul></div><div class=col-sm-3><h5>Support</h5><ul><li><a href="faq.html">FAQ</a><li><a href="contact-us.html">Help desk</a><li><a href="contact-us.html">Forums</a></ul></div><div class="col-sm-3 contactus"><h5>Contact Us</h5><ul><div><i aria-hidden=true class="fa fa-map-marker"></i><div class=footer-contact-info>A1706 , ETA Star , The Gardens , Bangalore 560023.</div></div><div><i aria-hidden=true class="fa fa-phone"></i><div class=footer-contact-info><a href=tel:+919902254748 class=formingHrefTel>+91 9902254748</a>, <a href=tel:+919902299176 class=formingHrefTel>+91 9902299176</a></div></div><div><i aria-hidden=true class="fa fa-envelope"></i><div class=footer-contact-info><a href=mailto:info@westgateithub.com>info@westgateithub.com</a></div></div></ul><div class="social-icons"><ul><li><a href="https://www.facebook.com/westgate.it.hub?mibextid=LQQJ4d" target="_blank"><i aria-hidden=true class="fa fa-facebook"></i></a><li><a href="https://twitter.com/WestgateIthub" target="_blank"><i aria-hidden=true class="fa fa-twitter"></i></a><li><a href="https://www.linkedin.com/in/west-gate-it-hub-8ab215257" target="_blank"><i aria-hidden=true class="fa fa-linkedin"></i></a><li><a href="https://instagram.com/westgate_it_hub?igshid=YmMyMTA2M2Y=" target="_blank"><i aria-hidden=true class="fa fa-instagram"></i></a></ul></div></div></div></div><div class=footer-copyright><p>© 2022 WestGate IT Hub</div>');

    $('.button-holder input[type="radio"]').click(function(){
    	var demovalue = $(this).val(); 
        $(".hideThis").hide();
        $("#show"+demovalue).show();
        
    });
    checkButtons();
 
  $("#multiple-checkboxes").multiselect({
    // Bootstrap 5 compatibility
    templates: {
      button: '<button type="button" class="multiselect dropdown-toggle btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false"><span class="multiselect-selected-text"></span></button>',
    },
  });
  
  });


  var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {

 
            showTab(currentTab);
            
});
function showTab(n) {
              var x = document.getElementsByClassName("tab");
              x[n].style.display = "block";
              
              if (n == 0) {
                document.getElementById("prevBtn").style.display = "none";
              } else {
                document.getElementById("prevBtn").style.display = "inline";
              }
              if (n == (x.length - 1)) {
                document.getElementById("nextBtn").innerHTML = "Submit";
                $('#nextBtn').addClass('submit');
               
              } else {
                document.getElementById("nextBtn").innerHTML = "Next";
              }
              fixStepIndicator(n)
            }
            function ShowMessage(){
              var countMe = 0;
              var getEmailOne2 = $('#exampleInputEmailjob').val();
       
               var validEmail2 = isEmail(getEmailOne2);
               var getAllInput = $("#formReg input");
               for(var i = 0;i<getAllInput.length-1;i++)
               {
                    var newData = $(getAllInput[i]).val();
                    if(newData != "")
                    {
                      countMe ++;
                    }
                 
               }
               if(validEmail2 == true)
               {
                
                 $('#exampleInputEmailjob').removeClass('wrong-border');
               }
               else{
                 validTab = false;
                 
                 $('#exampleInputEmailjob').addClass('wrong-border');
                 $('.error-div1 p').text('Please Enter Valid Email ID');
                 }
     
               if(countMe < getAllInput.length && $('#FormControlFile1').val() != "" && validEmail2 == true && $("#textarea#story").val() != "")
               {
                validTab = true;
                $('.error-div1').hide();
               } 
               if(validEmail2 != true){
                $('.error-div1').show();
                $('.error-div1 p').text('Please Enter Valid details');
              } 
                 
              if (validTab == true){
                document.getElementById("text-message1").style.display = "block"; 
                callSeakersApi();
                $('.hiddingThis').hide();
              }

                
            }
            function nextPrev(n) {
              if(n==1){
                validateFormDetails();
              }
              var x = document.getElementsByClassName("tab");
              if (n == 1  && !validateForm() ) return false;
              if(validTab == true){
              x[currentTab].style.display = "none";
              currentTab = currentTab + n;
              if (currentTab >= x.length) {
                 document.getElementById("nextprevious").style.display = "none";
                document.getElementById("all-steps").style.display = "none";
                document.getElementById("register").style.display = "none";
                 document.getElementById("text-message").style.display = "block";
                 callApi();
               }
            }
              showTab(currentTab);
            }
           function validateForm() {
              var x, y, i, valid = true;
              x = document.getElementsByClassName("tab");
              y = x[currentTab].getElementsByTagName("input");
              for (i = 0; i < y.length; i++) {
                if (y[i].value == "") {
                  y[i].className += " invalid";
                  $('.error-div').show();
                  $('.error-div p').text('All Input fields required');
                  valid = false;
                }else{
                  y[i].className -= " invalid";
                }
              }
              if (valid) {
                document.getElementsByClassName("step")[currentTab].className += " finish";
              }
              return valid;
            }
            function fixStepIndicator(n) {
              var i, x = document.getElementsByClassName("step");
              for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(" active", "");
                
              }
              x[n].className += " active";
             
            }
            function checkButtons(){
       
        $('.accordion-item').each(function() {
          if($('.accordion-body', this).length <= 0) {
           $(this).addClass('className');
           
          }
      });
       }


  function validateFormDetails(){
    $('.tab').each(function()
    {
      if ( $(this).css('display') == 'block')
      {
        var id = $(this).attr('id');
        console.log(id);
      }
      if(id == 1)
      {
        var getEmailOne = $('#exampleInputEmail1').val();
       
        var validEmail = isEmail(getEmailOne);
        if(validEmail == true)
        {
          validTab = true;
          $('.error-div').hide();
          $('#exampleInputEmail1').removeClass('wrong-border');
           $('#exampleInputEmail2').val(getEmailOne);
        

        }
        else{
          validTab = false;
          $('.error-div').show();
          $('#exampleInputEmail1').addClass('wrong-border');
          $('.error-div p').text('Please Enter Valid Email ID');
          }

      }
      if(id == 2)
      {
        var getEmailOne1 = $('#exampleInputEmail2').val();
       var validEmail1 = isEmail(getEmailOne1);
        if(validEmail1 == true)
        {
          validTab = true;
          $('.error-div').hide();
        }
        else{
          validTab = false;
          $('.error-div').show();
          $('#exampleInputEmail2').addClass('wrong-border');
          $('#exampleInputEmail2').removeClass('wrong-border')
          $('.error-div p').text('Please Enter Valid Email ID');
        }
      }
      if(id == 3)
      {
        var counter = 0;
        var data = $('#accordionMaster input[type="checkbox"]:checked').length;
          if(data > 0) {
            validTab = true;
          $('.error-div').hide();
          }
          else
          {
            validTab = false;
            $('.error-div').show();
            $('.error-div p').text('Please Select atleast one CPV code');
           }
      }
      if( id == 4)
      {
        
          var check = true;
          $(".parent-container input:radio").each(function(){
              var name = $(this).attr("name");
              if($("input:radio[name="+name+"]:checked").length == 0){
                  check = false;
              }
          });
          
          if(check){
            validTab = true;
            $('.error-div').hide();
          }else{
            $('.error-div').show();
            $('.error-div p').text('Please select one option in each question.');
              
              validTab = false;
          }
      
      }
  });
  
    
   
    

  }
            function isEmail(email) {
              var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              return regex.test(email);
            }

           

            $('#phone').keypress(function(e) {  
              var arr = [];  
              var kk = e.which;  
             
              for (i = 48; i < 58; i++)  
                  arr.push(i);  
             
              if (!(arr.indexOf(kk)>=0))  
                  e.preventDefault();  
          });
          $('#phone1').keypress(function(e) {  
            var arr = [];  
            var kk = e.which;  
           
            for (i = 48; i < 58; i++)  
                arr.push(i);  
           
            if (!(arr.indexOf(kk)>=0))  
                e.preventDefault();  
        });    
            
         $('#phone3').keypress(function(e) {  
              var arr = [];  
              var kk = e.which;  
             
              for (i = 48; i < 58; i++)  
                  arr.push(i);  
             
              if (!(arr.indexOf(kk)>=0))  
                  e.preventDefault();  
          });
        

        var toggle = false;
        $('#headingOneMaster input[type="checkbox"]').click(function() {
                $("#collapseOneMaster input[type=checkbox]").attr("checked",!toggle);
                $("#collapseOneMaster input[type=checkbox]").toggleClass("main");
                toggle = !toggle;
        }); 
        var toggle1 = false;
        $('#headingTwoMaster input[type="checkbox"]').click(function() {
          $("#collapseTwoMaster input[type=checkbox]").attr("checked",!toggle1);
          $("#collapseTwoMaster input[type=checkbox]").toggleClass("main");
          toggle1 = !toggle1;
  }); 


  $('.parent-contactus button').on('click', function(event){
     var contantUsName = $('.parent-contactus #name').val();
     var contantUsSubject = $('.parent-contactus #subject ').val();
     var contantUsEmail = $('.parent-contactus #email').val();
     var contantUsMessage = $('.parent-contactus #message').val();
     

    event.preventDefault()
    var apiData = {
      "name": contantUsName,
      "subject": contantUsSubject,
      "email": contantUsEmail,
      "message": contantUsMessage
    }
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: 'http://localhost:8011/v1/api/adminApp/contactUs',
      data: JSON.stringify(apiData),
      success: function () {
        
        $(".onSuccess").show();
        $(".row.parent-contactus form .mb-3").hide();
      }
    });
    
    

  })


function callSeakersApi(){
    var jobSeakerFirstName = $('#formReg p:nth-child(1) input').val();
    var jobSeakerLastName = $('#formReg p:nth-child(2) input').val();
    var jobSeakerEmail = $('#formReg p:nth-child(3) input').val();
    var jobSeakerMobile = parseInt($('#formReg p:nth-child(4) input').val());
    var jobSeakerJobTitle = $('#formReg p:nth-child(5) input').val();
    var jobSeakerCurrentLocation = $('#formReg p:nth-child(6) input').val();
    var jobSeakerPreferredLocation= $('#formReg p:nth-child(7) select option').val();
    var jobSeakerSupportingText = $('#formReg textarea#story').val().trim();
    var getFile = document.getElementById('FormControlFile1');
  var getCPVCodes = $('.multiselect.dropdown-toggle').attr('title');
   
    
    const uploadFile = async(  ) => {
      const uploadedFile = getFile.files[ 0 ];
      const formData     = new FormData();
      formData.append( 'resume', uploadedFile );
      formData.append( 'first_name', jobSeakerFirstName );
      formData.append('last_name', jobSeakerLastName );
      formData.append('email', jobSeakerEmail );
      formData.append('mobile_no', jobSeakerMobile );
      formData.append('job_title', jobSeakerJobTitle );
      formData.append('current_location', jobSeakerCurrentLocation );
      formData.append('preferred_location', jobSeakerPreferredLocation );
      formData.append('supporting_words', jobSeakerSupportingText );
      formData.append('cpv_codes', getCPVCodes);
      const rawResponse = await fetch( 'http://localhost:8011/v1/api/adminApp/jobSeaker', {
            method: 'POST',
            body: formData
      });
      
      
  };
  
  uploadFile();

  }

  function callApi(){
   
    var CPV_codes =[];
    $( '#accordionMaster input[type="checkbox"]:checked' ).each(function() {
      var z = $(this).siblings('button').text();
      var trimStr = $.trim(z);
       CPV_codes.push(trimStr);
    });
    
    var firstName = $('#regForm  #1 p:nth-child(2) input').val();
    var lastname = $('#regForm  #1 p:nth-child(3) input').val();
    var email = $('#regForm  #1 p:nth-child(4) input').val();
    var mobile_no =  parseInt($('#regForm  #1 p:nth-child(5) input').val());
    var org_name = $('#regForm  #2 p:nth-child(2) input').val();;
    var org_contact_no = parseInt($('#regForm  #2 p:nth-child(4) input').val());
    var address = $('#regForm  #2 p:nth-child(5) input').val();
    var city = $('#regForm  #2 p:nth-child(6) input').val();
    var zip_code =  parseInt($('#regForm  #2 p:nth-child(7) input').val());
    
    var ISO = false;
    if($('input[name="group1"]:checked').val() == "yes")
    {
      ISO = true;
    }
    var GDPR = false ;
    if($('input[name="group2"]:checked').val() == "yes")
    {
      GDPR =true;
    }
    var CASE_STUDIES = false;
    if($('input[name="group3"]:checked').val() == "yes")
    {
      CASE_STUDIES = true;
    }
    var TURN_OVER = false;
    if($('input[name="group4"]:checked').val() == "yes")
    {
      TURN_OVER = true;
    }

    event.preventDefault();
    var apiData = {
      "first_name": firstName,
      "last_name": lastname,
      "email": email,
      "mobile_no": mobile_no,
      "org_name": org_name,
      "org_contact_no": org_contact_no,
      "address": address,
      "city": city,
      "zip_code": zip_code,
      "cpv_codes": CPV_codes,
      "ISO": ISO,
      "GDPR": GDPR,
      "CASE_STUDIES": CASE_STUDIES,
      "TURN_OVER": TURN_OVER
    }
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: 'http://localhost:8011/v1/api/adminApp/suppliers',
      data: JSON.stringify(apiData)
      
      
    });
  }


$('form.form-subscribe button').click(function(event){
  event.preventDefault();
  var getSubscribeEmail = $('form.form-subscribe input.form-control.input-lg').val();
  var ValidGetSubscribeEmail = isEmail(getSubscribeEmail);
  if (ValidGetSubscribeEmail == true) {
   
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: 'http://localhost:8011/v1/api/adminApp/newsLetterSubscribe?email='+getSubscribeEmail,
     
    });
  }
}) 
    
  
