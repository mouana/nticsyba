$(document).ready(function() {
    //! Dynamique Create :

        //? Events :

        $('.evenements').html(`
            <h1>Les Événements :</h1>
            <p>Dans sa perspective de formation de managers citoyens et dans le cadre de sa politique de développement de la connaissance et de l'esprit de citoyenneté active, Ntic Syba organise tout au long de l'année universitaire un certain nombre de rencontres et de manifestations sous différentes formes.</p>
            <p>Certains évènements Ntic Syba sont strictement réservées aux stagaires et aux Formateurs, d'autres sont orientées vers les stagaires et leur parents.  Enfin, des évènements Ntic Syba sont organisés et ouverts a tous les stagaires et tous les instituts !</p>
            <p>Des manifestations multiples et variées organisées soit directement par Ntic Syba, soit par le biais de la OFPPT.</p>
        `)

        $('.evenements').css({
            'position': 'relative',
            'right': '-100%'
        });

        $('.evenements').animate({
            right: '0%'
        }, 1000);

        const eventCategories = [
            {
                category: "institutional",
                events: [
                    {
                        imageSrc: "/photos/header/Events_Pictures/event_1.jpeg",
                        title: "Cours Soutien"
                    },
                    {
                        imageSrc: "/photos/header/Events_Pictures/event_2.jpeg",
                        title: "World Saving Day"
                    },
                    {
                        imageSrc: "/photos/header/Events_Pictures/event_3.png",
                        title: "Cyber Day"
                    }
                ]
            },
            {
                category: "public",
                events: [
                    {
                        imageSrc: "/photos/header/Events_Pictures/event-public-1.jpeg",
                        title: "Language Learning"
                    },
                    {
                        imageSrc: "/photos/header/Events_Pictures/event-public-2.jpeg",
                        title: "Graduation Day"
                    },
                    {
                        imageSrc: "/photos/header/Events_Pictures/event-public-3.jpg",
                        title: "Art"
                    }
                ]
            },
            {
                category: "pedagogical",
                events: [
                    {
                        imageSrc: "/photos/header/Events_Pictures/event-peda-1.jpeg",
                        title: "E-learning"
                    },
                    {
                        imageSrc: "/photos/header/Events_Pictures/event-peda-2.jpeg",
                        title: "Digital Marketing"
                    },
                    {
                        imageSrc: "/photos/header/Events_Pictures/event-peda-3.jpeg",
                        title: "Trying Crypto"
                    }
                ]
            },
        ];

        function EventHTML(imageSrc, title) {
            return `
                <div class="event-item">
                    <a href="#">
                        <img src="${imageSrc}" alt="${title}">
                    </a>
                    <a href="#">
                        <h4>${title}</h4>
                    </a>
                    <button class="btn text-light w-50">vote</button>
                </div>
            `;
        }

        $.each(eventCategories, function(index, category) {
            const $container = $("#" + category.category + "Events");

            $.each(category.events, function(index, event) {
                const eventHTML = EventHTML(event.imageSrc, event.title);
                $container.append(eventHTML);
            });

            $container.css('display', 'none')

            $('h2').css('display', 'none');
            setTimeout(() => {
                $('h2').css({
                    'display': '',
                    'position': 'relative',
                    'left': '-100%'
                });
                $('h2').animate({
                    left: '0%'
                }, 2000);

                $container.css({
                    'display': 'flex',
                    'position': 'relative',
                    'left': '-100%'
                });
                $container.animate({
                    left: '0%'
                }, 2000);
            }, 1000);

            let isAnimated = false;
            $(window).scroll(function() {
                let scrollPosition = $(window).scrollTop();
                let containerOffset = $container.offset().top;
                let windowHeight = $(window).height();
                
                if (scrollPosition > containerOffset - windowHeight && !isAnimated) {
                    $('h2').css({
                        'position': 'relative',
                        'left': '-100%'
                    });
                    $('h2').animate({
                        left: '0%'
                    }, 2000);

                    $container.css({
                        'position': 'relative',
                        'left': '-100%'
                    });
                    $container.animate({
                        left: '0%'
                    }, 2000);
                    isAnimated = true;
                }
                else if (scrollPosition <= 0) {
                    isAnimated = false;
                }
            });
        });

        //? Pagination :

        function PaginationHtml(label, url, disabled) {
            let disabledClass = disabled ? 'disabled' : '';
            return `
                <li class="page-item ${disabledClass}">
                    <a class="page-link" href="${url}">${label}</a>
                </li>
            `;
        }

        const pages = [
            { label: "Precedent", url: "#", disabled: true },
            { label: "1", url: "#" },
            { label: "2", url: "#" },
            { label: "3", url: "#" },
            { label: "Suivant", url: "#" }
        ];

        let pageItemsHTML = pages.map(function(page) {
            return PaginationHtml(page.label, page.url, page.disabled);
        });

        let paginationHTML = `
            <ul class="pagination">
                ${pageItemsHTML.join('')}
            </ul>
        `;

        setTimeout(() => {
            $('#nav-pagination').html(paginationHTML);
            $('#nav-pagination').css({
                'position': 'relative',
                'right': '-100%'
            });
            $('#nav-pagination').animate({
                right: '0%'
            }, 2000);
        },2000);

        let target_animated = false;
        $(window).scroll(function() {
            let scrollPosition = $(window).scrollTop();
            let targetOffset = $('#nav-pagination').offset().top;
            let windowHeight = $(window).height();
        
            if (scrollPosition > targetOffset - windowHeight && !target_animated) {
                $('#nav-pagination').css({
                    'position': 'relative',
                    'right': '-100%'
                });
                $('#nav-pagination').animate({
                    right: '0%'
                }, 2000);
                target_animated = true
            }
            else if (scrollPosition <= 0) {
                target_animated = false
            }
        });

        //? Footer :

        $('foot-js').css({
            'display': 'none'
        });

        setTimeout(() => {
            $('foot-js').css({
                'display': '',
                'position': 'relative',
                'left': '-100%'
            });
            $('foot-js').animate({
                left: '0%'
            }, 2000);
        },3000);    

    //! Voting :
    
    function handleVote(voteCount, voteButton) {
        voteCount++;
        voteButton.text(voteCount + (voteCount === 1 ? ' vote' : ' votes'));
        voteButton.css({
            'transform': 'scale(1.11)',
            'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 8px 8px',
            'transition': 'transform 0.2s ease'
        });
        setTimeout(function() {
            voteButton.css({
                'transform': 'scale(1)',
                'transition': 'transform 0.2s ease'
            });
        }, 300);
    }

    let list_btn = $('.btn');
    let list_votes = [];
    $.each(list_btn, (index,btn) => {
        $(btn).attr('id', `btn-${index + 1}`);
        list_votes.push(Math.floor(Math.random() * 1001));
    })
    for (let i = 0; i < list_btn.length; i++) {
        
        let voteButton = $(`#btn-${i+1}`);
        let voteCount = list_votes[i];

        voteButton.text(voteCount + (voteCount === 1 ? ' vote' : ' votes')).attr('data-vote-count', voteCount);

        setInterval(() => {
            voteCount += Math.floor(Math.random() * 201) - 100;
            if (voteCount < 0) {
                voteCount = 1;
            }
            voteButton.text(voteCount + (voteCount === 1 ? ' vote' : ' votes')).attr('data-vote-count', voteCount);
        }, 3000);                
        
        voteButton.click(function() {
            handleVote(parseInt($(this).attr('data-vote-count')), $(this));
            $(this).off('click');
        });
        voteButton.mouseenter(function() {
            $(this).css({
                'transform': 'scale(1.10001)',
                'background': 'rgb(2, 117, 216)',
                'transition': 'transform 0.2s ease'
            })
        })
        voteButton.mouseleave(function() {
            $(this).css({
                'transform': 'scale(1)',
                'background': 'rgb(71, 174, 106)',
                'transition': 'transform 0.2s ease'
            })
        })
    }
});