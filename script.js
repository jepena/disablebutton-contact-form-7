(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
    
    // Contact Form 7 disable button if fields is empty
    $('.wpcf7-submit').prop("disabled",true);
    // on change keyup events check the field if empty or not
    $(document).on('change keyup', '.form-control', function(e){
        var Disabled = true;
        $(".form-control").each(function() {
            var value = this.value
            if ((value)&&(value.trim() !=''))
            {
                Disabled = false
            }else{
                Disabled = true
                return false
            }
        });

        if(Disabled){
            $('.wpcf7-submit').prop("disabled", true);
          }else{
            $('.wpcf7-submit').prop("disabled", false);
        }
    });

    //wpcf7submit , wpcf7mailsent , wpcf7invalid
    var form_data = $('#file-data').val(); //get the urldata to make it dynamic
    document.addEventListener( 'wpcf7submit', function( event ) {
        // select form id where you apply the function
        if ( '380' == event.detail.contactFormId ) {
            window.open(form_data,'_blank');
        }
    }, false );
    
  });
    
}(jQuery));
