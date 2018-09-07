var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    flowStep0();
  }, 1000 + (Math.random() * 20) * 100);
}

function windowsOptionManagement() {
  $("#chat-box .options").removeClass("deactivated");
  $("#chat-box").attr("data-opened", "open");
}

$('.message-submit').click(function() {
  insertMessage();
  windowsOptionManagement()
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    windowsOptionManagement()
    return false;
  }
})

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#saludo').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

// Tooltips
$('[data-toggle="tooltip"]').tooltip();

// function bg0(){
//   $("body").css("background","url('img/bg-0.jpg')");
//   setTimeout(function (){
//     bg2();
//   }, 9000);
// }
// function bg1(){
//   $("body").css("background","url('img/bg-1.jpg')");
//   setTimeout(function (){
//     bg2();
//   }, 9000);
// }
// function bg2(){
//   $("body").css("background","url('img/bg-2.jpg')");
//   setTimeout(function (){
//     bg0();
//   }, 9000);
// }
// function bg3(){
//   $("body").css("background","url('img/bg-3.jpg')");
//   setTimeout(function (){
//     bg0();
//   }, 9000);
// }


// setTimeout(function (){
//   bg2();
// }, 9000);


// SLIDER SCRIPT
$("#cantidad-slider").ionRangeSlider({
  min: 0,
  max: 15000,
  step: 500,
  prefix: "$",
  grid: true,
  onChange: function (obj) {
    var slider = $("#cantidad-slider").data("ionRangeSlider");
    var from = slider.result.from;
    $("#monto-credito").val(from);
  }
});
//CAMBIO DE MONTO
$(".irs-slider").on('click', function() {

});

$(".irs").on('click', function() {

});



// EMULANDO TODOS LOS MENSAJES
// notificacion
function flowStep0() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#paracontinuar').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout(function (){
      flowStep1();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

// Aviso y Terminos
function flowStep1() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#aviso-message').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout(function (){
      flowStep2();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

$(document).on("click", "#btn-toggle-aviso", function() {
  $(".aviso-privacidad").toggleClass('auto-height', 1000, 'swing');
  $(".full-view small").toggleClass('to-hide');
  updateScrollbar();
});

$(document).on("click", "#btn-toggle-terminos", function() {
  $(".terminos").toggleClass('auto-height', 1000, 'swing');
  $(".full-view-terminos small").toggleClass('to-hide');
  updateScrollbar();
});


function flowStep2() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#terminos-block').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}


function hideStep2(){
  $("#acepto-aviso").parent().hide();
  $("#acepto-terminos").parent().hide();

  $("#acepto-aviso-label").show();
  $("#acepto-terminos-label").show();
}

function goFlowStep3(){
  $.when( hideStep2() ).done(function() {
      flowStep3();
  });
}

$(document).on("click", "#acepto-aviso", function() {
  if ($("#acepto-aviso").is(':checked') && $("#acepto-terminos").is(':checked')) {
    goFlowStep3();
  }
  updateScrollbar();
});

$(document).on("click", "#acepto-terminos", function() {
  if ($("#acepto-aviso").is(':checked') && $("#acepto-terminos").is(':checked')) {
    goFlowStep3();
  }
  updateScrollbar();
});




function flowStep3() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#comencemos').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep4();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep4() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#personal-data').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

$(document).on("click", "#btn-personal-data", function() {
  $(this).addClass('to-hide');
  flowStep5();
  updateScrollbar();
});

function flowStep5() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#cuentenos').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep6();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep6() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#domicilio').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

$(document).on("click", "#btn-domicilio", function() {
  $(this).addClass('to-hide');
  flowStep7();
  updateScrollbar();
});

function flowStep7() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#autorizacionbc').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep8();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep8() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#acuerdobc-block').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

function hideStep8(){
  $("#acepto-acuerdosbc").parent().hide();

  $("#acepto-acuerdobc-label").show();
}

function goFlowStep9(){
  $.when( hideStep8() ).done(function() {
      flowStep9();
  });
}

$(document).on("click", "#acepto-acuerdosbc", function() {
  if ($("#acepto-acuerdosbc").is(':checked')) {
    goFlowStep9();
  }
  updateScrollbar();
});

function flowStep9() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#revisesms').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep10();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep10() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#sms-block').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    $('#smscode').focus();
  }, 500 + (Math.random() * 20) * 100);
}

$("#smscode").keyup(function() {
  if ($(this).val() == '123456'){
    $('#showCodeErro').hide();
    flowStep11();
  } else {
    if ($(this).val().length == 6){
      $('#showCodeErro').show();
    }
  }
});

function flowStep11() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#mejorparte').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep12();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep12() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#cotizador').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

function hideStep12(){
  $("#btn-cotizar").hide();
}

function goFlowStep13(){
  $.when( hideStep12() ).done(function() {
      flowStep13();
  });
}

$(document).on("click", "#btn-cotizar", function() {
  goFlowStep13();
  updateScrollbar();
});


function flowStep13() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#yacasi').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep14();
    }, 1000);
  }, 500 + (Math.random() * 20) * 100);
}


function flowStep14() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#adicionalinfo').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

function hideStep14(){
  $("#btn-adicional-data").hide();
}

function goFlowStep15(){
  $.when( hideStep14() ).done(function() {
      flowStep15();
  });
}

$(document).on("click", "#btn-adicional-data", function() {
  goFlowStep15();
  updateScrollbar();
});

function flowStep15() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#yparaterminar').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep16();
    }, 1500);
  }, 500 + (Math.random() * 20) * 100);
}


function flowStep16() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#dataine').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
    setTimeout (function () {
      flowStep17();
    }, 2500);
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep17() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#listodocumentos').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

function hideStep18(){
  $("#si-documents").parent().hide();
  $("#no-documents").parent().hide();

  $("#terminemos").show();
  $("#continuar-luego").show();
}

function goFlowStep19(){
  $.when( hideStep18() ).done(function() {
      flowStep19();
  });
}

function goFlowStep18(){
  $.when( hideStep18() ).done(function() {
      flowStep18();
  });
}

$(document).on("click", "#si-documents", function() {
  if ($("#si-documents").is(':checked')) {
    goFlowStep19();
  }
  updateScrollbar();
});

$(document).on("click", "#no-documents", function() {
  if ($("#no-documents").is(':checked')) {
    goFlowStep18();
  }
  updateScrollbar();
});

function flowStep18() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#contluego').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}

function flowStep19() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="../img/android_black.svg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  setTimeout(function() {
    $('.message.loading').remove();
    $('#cargadocs').appendTo($('.mCSB_container')).removeClass('to-hide').addClass('new');
    setDate();
    updateScrollbar();
  }, 500 + (Math.random() * 20) * 100);
}