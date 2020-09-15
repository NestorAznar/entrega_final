$(document).ready(function(){
  $('.link-scrollspy-refresh').click(function(){
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    });
  });
  $('.teoria').on('hidden.bs.collapse', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    });
  });
});

$(document).ready(function(){
  $('.estrucuras-subcelulares li').click(function(){
    $('.estrucuras-subcelulares li').css('color','#707070');
      var esSeleccionada = this.className;
      $('.figura-celula').attr("src","../img/figuras/clase03/" + esSeleccionada + ".jpg");
      $('.' + esSeleccionada).css('color','black');
  });
});

$(document).ready(function(){
  if ($('.navbar-clases').length > 0) {
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
      scroll_top = $(this).scrollTop();
      if(scroll_top < last_scroll_top) {
        $('.navbar-clases').removeClass('scroll-down').addClass('scroll-up');
      }
      else {
        $('.navbar-clases').removeClass('scroll-up').addClass('scroll-down');
        $('.header-clases').css('height','76px');
        $('.header-clases').css('margin-bottom','87px');
      }
      last_scroll_top = scroll_top;
    });
  };
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
