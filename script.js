jQuery.noConflict();
jQuery(document).ready(function(){
  var hide = jQuery('main').hide();

  jQuery('label').change(function(){
        jQuery(hide).toggle();
  });

  jQuery('.flip-2').hide();

  jQuery('#but').on('click',function(evt){
    jQuery('.flip-2').show();
    jQuery('.flip-2').css({
      'transform': 'translateX(12px)'
    })

  jQuery('.flip').hide();

  })

  jQuery('#but-2').click(function(evt){
    jQuery('.flip-2').hide();
    jQuery('.flip').show();
    jQuery('.flip').css({
      'transition': 'transform  .2s ease-out',
      'transform': 'rotateY(180deg)'});
  })

})
