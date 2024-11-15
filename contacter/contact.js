$(document).ready(function() {
    //! Dynamique Create :

    const contactData = [
        {
            id: 0,
            icon: "itineraire.gif",
            title: "notre bureau",
            text: "Ntic syba sidi youssef ben aali",
            link: "https://maps.app.goo.gl/ZMfMtV2vbLuUUdhv9"
        },
        {
            id: 1,
            icon: "telephone.gif",
            title: "numero de telephon",
            text: "+212 710763700",
        },
        {
            id: 2,
            icon: "fax.gif",
            title: "Fax",
            text: "555-123-4567",
        },
        {
            id: 3,
            icon: "message.gif",
            title: "Email",
            text: "ntic.ofppt@gmail.com",
        }
    ];

    function ContactHTML(data) {
        var html = "";
        $.each(data, function(index, item) {
            html += `
                <div id="hover-${item.id}" class="contact-outil ${item.id % 2 === 0 ? 'outil-txt' : 'outil-phon'}">
                    <i><img src="${item.icon}" alt=""></i>
                    <h4>${item.title}</h4>
                    <p class="txt" id="copyable-${item.id}">${item.text}</p>
                    ${item.link ? `<a id="copy-${item.id}" href="${item.link}" target="_blank"><i class="fa fa-location-arrow"></i></a>` : `<a id="copy-${item.id}"><i class='fas fa-copy'></i></a>`}
                </div>
            `;
        });
        return html;
    }

    //? Tools :

    $('.contact-sect-outil').html(ContactHTML(contactData)).css('display', 'none');
    setTimeout(() => {
        $('.contact-sect-outil').css({
            'display': '',
            'position': 'relative',
            'right': '-100%'
        });
        $('.contact-sect-outil').animate({
            right: '0%'
        }, 1000);
    });
    
    //? Form :
    
    $('.contact-sec').css('display', 'none');
    setTimeout(() => {
        $('.contact-sec').css({
            'display': '',
            'position': 'relative',
            'left': '-250%'
        });
        $('.contact-sec').animate({
            left: '0%'
        }, 2000);
    });

    //! Copy :

    function copy (id) {
        let text = $(id).text();
        let tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(text).select();
        document.execCommand('copy');
        tempInput.remove();
        alert('Copied: ' + text);
    };

    let list_p = $('.txt');
    for (let i = 0; i <= list_p.length; i++){
        let copy_btn = $(`#copy-${i}`);
        let hover_btn = $(`#hover-${i}`);

        copy_btn.css({
            'color': 'black'
        })
        
        hover_btn.mouseenter(function(){
            copy_btn.css({
                'display': ''
            })
        })
        hover_btn.mouseleave(function(){
            copy_btn.css({
                'display': 'none'
            })
        })

        copy_btn.css({
            'display': 'none',
            'background': 'rgba(128 128 128 / 20%)',
            'border': 'none',
            'padding': '10px 15px',
            'border-radius': '10px',
            'cursor': 'pointer'
        })
        copy_btn.mouseenter(function(){
            copy_btn.css({
                'background': 'rgb(2, 117, 216)',
                'color': 'white'
            })
        })
        copy_btn.mouseleave(function(){
            copy_btn.css({
                'background': 'rgba(128 128 128 / 20%)',
                'color': 'black'
            })
        })
        if (i != 0){
            copy_btn.click(function(){
                copy($(`#copyable-${i}`));
            })
        }
    }
    //! Form :

    $('.contact-sec').html(`
        <h2>Nous contacter</h2>
        <form id="myForm">
            <div class="form-group mb-3  w-75">
                <input type="text" class="form-control" id="formInput" placeholder="Entre Votre Nom"><span id="name-invalid"></span>
                <input type="text" class="form-control" id="formInput2" placeholder="Entre votre email"><span id="email-invalid"></span>
                <label for="area" class="form-label"></label>
                <textarea class="form-control " name="area" id="area" placeholder="Entre Votre Message"></textarea><span id="message-invalid"></span>
            </div>
            <button type="submit" class="btn btn-outline-light m-0">Nous fair parvenir</button>
        </form>
    `)

    let valide = $('#valide');
    valide.html(`
        <div><i class="fa fa-check-circle" style="font-size:30px;color:green"></i></div>
            <h3>Votre message envoyé</h3>
        <button id="return">Retourne</button>
    `)
    
    $('#myForm').submit(function(event) {
        let name = $('#formInput').val().trim();
        let email = $('#formInput2').val().trim();
        let message = $('#area').val().trim();
        let nameRegex = /^.{5,30}$/;
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let messageRegex = /^.{10,50}$/;

        // Name :
        if (name === '') {
            $('#name-invalid').text('Veuillez saisir un nom.').attr('class', 'invalide');
            event.preventDefault();
            return;
        }
        else if (!nameRegex.test(name)) {
            $('#name-invalid').text('Veuillez saisir un nom entre 5 et 30 caractères.').attr('class', 'invalide');
            event.preventDefault();
            return;
        }
        else {
            $('#name-invalid').css('display', 'none')
        }

        // Email :
        if (email === '') {
            $('#email-invalid').text('Veuillez saisir une adresse email.').attr('class', 'invalide');
            event.preventDefault();
            return;
        }
        else if (!emailRegex.test(email)) {
            $('#email-invalid').text('Veuillez entrer une adresse email valide.').attr('class', 'invalide');
            event.preventDefault();
            return;
        }
        else {
            $('#email-invalid').css('display', 'none')
        }

        // Message :
        if (message === '') {
            $('#message-invalid').text('Veuillez écrire une message.').attr('class', 'invalide');
            event.preventDefault();
            return;
        }
        else if (!messageRegex.test(message)) {
            $('#message-invalid').text('Veuillez écrire une message entre 10 et 50 caractères.').attr('class', 'invalide');
            event.preventDefault();
            return;
        }
        else {
            $('#message-invalid').css('display', 'none');
        }

        event.preventDefault();
        valide.css('display', 'flex');
        $('.contact-sec').css('display', 'none');
        $('.contact-sect-outil').css('display', 'none');
    });
    
    $('#return').click(() => {
        valide.css('display', 'none');
        $('.contact-sec').css('display', 'flex');
        $('.contact-sect-outil').css('display', 'flex');

        $('#formInput').val('');
        $('#formInput2').val('');
        $('#area').val('');
    })
});