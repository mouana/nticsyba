var home = document.querySelector('.fa-house');
home.addEventListener('click',()=>{
var url = '../home/home.html'
window.location.href = url;
})

$(document).ready(function() {
    const cefMatriculeRegex = /^[a-zA-Z][0-9]{6}$/; 
    const groupRegex = /^[a-zA-Z]{3}[0-9]{3}$/; 
    const nomRegex = /^[a-zA-Z]{3,}$/; 
    const prenomRegex = /^[a-zA-Z]{3,}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
    function validateInput(regex, input, errorMessageElement) {
        const valid = regex.test(input);
        errorMessageElement.text(valid ? "" : getErrorMessage(regex));
        return valid;
    }

    function getErrorMessage(regex) {
        if (regex === groupRegex)  {
            return "Le groupe doit avoir 3 caractères alphabétiques suivis de 3 chiffres" ;
        } else if (regex === passwordRegex) {
            return "Mot de passe incorrect";
        }  else if (regex === cefMatriculeRegex) {
            return "entrez un matrecule valide";
        }else if (regex === emailRegex) {
            return"Email invalide";
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
        const groupValid = validateInput(groupRegex, $('#Group').val(), $('#Group').siblings('.error-message'));
        const nomValid = validateInput(nomRegex, $('#nom').val(), $('#nom').siblings('.error-message'));
        const prenomValid = validateInput(prenomRegex, $('#prenom').val(), $('#prenom').siblings('.error-message'));
        const emailValid = validateInput(emailRegex, $('#email').val(), $('#email').siblings('.error-message'));
        const passwordValid = validateInput(passwordRegex, $('#password').val(), $('#password').siblings('.error-message'));
        const confirmPasswordValid = $('#password').val() === $('#confirmPassword').val();
        $('#confirmPassword').siblings('.error-message').text(confirmPasswordValid ? "" : "Les mots de passe ne correspondent pas");

        $('input').removeClass('error-input');
        $('.error-message').each(function() {
            if ($(this).text() !== "") {
                $(this).siblings('input').addClass('error-input');
            }
        });

        if (cefMatriculeValid && groupValid && nomValid && prenomValid && emailValid && passwordValid && confirmPasswordValid) {
            alert('votre compte a bien cree');
        }
    });
});