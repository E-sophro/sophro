/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
const input = $('.validate-input .input100');

$('.validate-input .input100').each(function() {
  $(this).on('blur', function() {
    if (validate(this) === false) {
      showValidate(this);
    } else {
      $(this).parent().addClass('true-validate');
    }
  });
});


$('.validate-form').on('submit', () => {
  let check = true;
  for (let i = 0; i < input.length; i++) {
    if (validate(input[ i ]) === false) {
      showValidate(input[ i ]);
      check = false;
    }
  }
  return check;
});

$('.validate-form .input100').each(function() {
  $(this).focus(function() {
    hideValidate(this);
    $(this).parent().removeClass('true-validate');
  });
});

function validate(inputToValidate) {
  if ($(inputToValidate).attr('type') === 'email' || $(inputToValidate).attr('name') === 'email') {
    if ($(inputToValidate).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
      return false;
    }
  } else if ($(input).val().trim() === '') {
    return false;
  }
  return true;
}

function showValidate(inputField) {
  const thisAlert = $(inputField).parent();
  $(thisAlert).addClass('alert-validate');
  $(thisAlert).append('<span class="btn-hide-validate">&#xf135;</span>');
  $('.btn-hide-validate').each(function() {
    $(this).on('click', function() {
      hideValidate(this);
    });
  });
}

function hideValidate(inputField) {
  const thisAlert = $(inputField).parent();
  $(thisAlert).removeClass('alert-validate');
  $(thisAlert).find('.btn-hide-validate').remove();
}
