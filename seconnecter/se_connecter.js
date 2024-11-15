document.addEventListener("DOMContentLoaded", function(){
    var home = document.querySelector('.fa-house');
    home.addEventListener('click',()=>{
    var url = '../home/home.html'
    window.location.href = url;
    });
    
})

     
$(document).ready(function() {
    const cefMatriculeRegex = /^[a-zA-Z][0-9]{6}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
    function validateInput(regex, input, errorMessageElement) {
        const valid = regex.test(input);
        errorMessageElement.text(valid ? "" : getErrorMessage(regex));
        return valid;
    }
  
    function getErrorMessage(regex) {
        if (regex === passwordRegex) {
            return "Mot de passe incorrect";
        }  else if (regex === cefMatriculeRegex) {
            return "entrez un matrecule valide";
        }
        else {
            return "Invalide";
        }
    }
  
    $('form').submit(function(event) {
        event.preventDefault();
        if ($('input[name="inlineRadioOptions"]:checked').length === 0) {
          $('.error-message').text("Veuillez choisir soit 'Stagiaire' soit 'Formateur'");
      } else {
          $('.error-message').text("");
          $(this).unbind('submit').submit();
      }
        const cefMatriculeValid = validateInput(cefMatriculeRegex, $('#cefMatricule').val(), $('#cefMatricule').siblings('.error-message'));
        const passwordValid = validateInput(passwordRegex, $('#password').val(), $('#password').siblings('.error-message'));
        $('input').removeClass('error-input');
        $('.error-message').each(function() {
            if ($(this).text() !== "") {
                $(this).siblings('input').addClass('error-input');
            }
        });
  
        if (cefMatriculeValid && passwordValid && $('input[name="inlineRadioOptions"]:checked').length > 0) {
          window.location.href = '../home/home.html'
        }
    });
  });