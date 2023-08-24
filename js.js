var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
          nav.classList.add('bg-light','text-dark', 'shadow');
        } else {
          nav.classList.remove('bg-light','text-dark', 'shadow');
        }
      });
  
      
      $("#contact-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbw7UwfpJ24k-C3JIrwU5-dlfvbBn9K0kwP-Zv__xfhVo27B2OkJlmsmBLmdHxlryI76/exec",
            data:$("#contact-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })
    $(document).ready(function () {
 
      $('ul.navbar-nav > li')
              .click(function (e) {
          $('ul.navbar-nav > li')
              .removeClass('active');
          $(this).addClass('active');
      });
  });