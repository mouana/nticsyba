

$(document).ready(function() {
    $('.search_prop').hide();
    $.ajax({
        url: 'qst.json',
        dataType: 'json',
        success: function(data) {
            var jsonData = data;
            
            function filterData(searchText) {
                $('.search_prop ul').empty();
                var searchWords = searchText.toLowerCase().split(" ");
                
                $.each(jsonData, function(index, item) {
                    var questionText = item.question.toLowerCase();
                    var match = false;
                    
                    searchWords.forEach(function(word) {
                        if (questionText.includes(word)) {
                            match = true;
                        }
                    });
                    
                    if (match) {
                        $('.search_prop ul').append('<li data-reponce="' + item.reponce + '">' + item.question + '</li>');
                    }
                });
                if (searchText === '') {
                    $('.search_prop').hide();
                } else {
                    $('.search_prop').show();
                }
            }
            $('.search-cont').keyup(function() {
                var searchText = $(this).val();
                filterData(searchText);
            });
            $('.search_prop ul').on('click', 'li', function() {
                var reponce = $(this).data('reponce');
                var $reponceDiv = $(this).find('.reponce');
    
                if ($reponceDiv.length) {
                    $reponceDiv.remove();
                } else {
                    $(this).append('<div class="reponce">' + reponce + '</div>');
                }
                $(this).siblings().toggle(!$reponceDiv.length);
                
            });
        },
        error: function(error) {
            console.log('Error fetching JSON data:', error);
            $('.search_prop').html('Error fetching data. Please try again later.');
        }
    });
});
$(document).ready(function () {
    //? Answers :
    const Answers = [
        "Oui, NTIC propose des programmes de formation continue ou de perfectionnement professionnel pour les diplômés.",
        "Oui, NTIC propose des programmes adaptés aux besoins du marché du travail local et international.",
        "Oui, NTIC offre un support ou des ressources supplémentaires pendant la période de stage.",
        "NTIC soutient les initiatives entrepreneuriales ou l'auto-emploi pour ses diplômés en offrant des programmes spécifiques visant à développer les compétences entrepreneuriales, en fournissant des conseils et des ressources pour le démarrage d'entreprises, ainsi qu'en facilitant l'accès à des réseaux professionnels et à des opportunités de financement.",
        "Pour obtenir des informations sur les stages pratiques pendant la formation à NTIC, vous pouvez contacter le service des stages de l'établissement ou consulter les ressources disponibles sur le site web de NTIC. Les conseillers pédagogiques ou les responsables des programmes de formation pourront également vous fournir des détails sur les opportunités de stage disponibles, les procédures à suivre pour postuler, ainsi que les exigences et les attentes associées aux stages pratiques.",
        "Les stages pendant les formations dispensées par NTIC sont généralement organisés de manière à offrir aux étudiants une expérience pratique pertinente dans leur domaine d'étude. Les stages peuvent être intégrés dans le programme académique, avec des périodes dédiées pour acquérir une expérience sur le terrain. NTIC travaille souvent en partenariat avec des entreprises locales ou internationales pour offrir des opportunités de stage à ses étudiants. Les stages peuvent varier en durée et en intensité, mais ils sont conçus pour fournir aux étudiants une exposition pratique aux aspects réels du travail dans leur domaine, les aidant ainsi à acquérir des compétences et des connaissances concrètes. Les détails spécifiques sur l'organisation des stages peuvent varier en fonction du programme et des exigences académiques de NTIC.",
        "Les stages à NTIC visent à fournir aux étudiants une expérience pratique, à développer leurs compétences professionnelles et à faciliter leur transition vers le marché du travail.",
        "Les avantages d'étudier à NTIC incluent l'accès à des programmes innovants, des opportunités de stage pratiques, et une préparation pour les carrières dans les technologies de l'information et de la communication."
    ];

    $('.Question').each((index, btn) => {
        let button = $(`#show-${index+1}`);
        let answer = $(`#Answer-${index+1}`);
        button.css('display', 'none');
        answer.css('display', 'none');

        button.click(()=> {
            $('.answer').not(answer).hide();
            answer.text(`Repence ${index+1} : ${Answers[index]}`).show();
        })

        $(btn).mouseenter(()=> {
            button.css('display', '');
        })
        $(btn).mouseleave(()=> {
            button.css('display', 'none');
        })
    });

    $(document).ready(function () {

    //? Form :

    $('#myForm').html(`
        <div class="form-group mb-3  w-75">
            <input type="text" class="form-control" id="formInput" placeholder="Votre Nom"><span id="name-invalid"></span>
            <input type="text" class="form-control" id="formInput2" placeholder="Entre votre email"><span id="email-invalid"></span>
            <label for="area" class="form-label"></label>
            <textarea class="form-control " name="area" id="area" placeholder="Votre Question"></textarea><span id="message-invalid"></span>
        </div>
        <button type="submit" class="btn btn-outline-light m-0">Envoyer</button>
    `)

    let valide = $('#valide');
    valide.html(`
        <div><i class="fa fa-check-circle" style="font-size:48px;color:green"></i></div>
            <p>Votre Question envoyé</p>
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

    //? Hide && Display :

    $('#Pose').click(function () {
        let hide = $("#hide");
        let button = $("#Pose");

        if (hide.css('display') === 'none') {
            hide.css('display' , 'block');
            button.text('Ferme');
            button.css('background','var(--blue)');
        }
        else {
            hide.css('display' , 'none');
            button.text('Cliquez ici');
            button.css('background','var(--blue)');
        }
    });
})
});