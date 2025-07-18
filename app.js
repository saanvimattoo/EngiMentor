const accordians= document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
    const heading= accordian.querySelector(".phead");
    const icon= accordian.querySelector(".icon");
    const pcnt= accordian.querySelector(".pcnt");
    const cacc= accordian.querySelectorAll(".cacc");


    heading.addEventListener("click", ()=>{
        if(icon.classList.contains('active')){
        icon.classList.remove('active');
        pcnt.classList.remove('ansact');
        heading.style.color="black";
    }
    else{
        icon.classList.add('active');
        pcnt.classList.add('ansact');
        heading.style.color="#354f52";
        
    }
    })  

    cacc.forEach(cacc=>{
        const chead= cacc.querySelector(".chead");
        const cicon= cacc.querySelector(".cicon");
        const ccnt= cacc.querySelector(".ccnt"); 

        chead.addEventListener("click", ()=>{
            if(cicon.classList.contains('active')){
            cicon.classList.remove('active');
            ccnt.classList.remove('cansact');
            chead.style.color="black";
        }
        else{
            cicon.classList.add('active');
            ccnt.classList.add('cansact');
            chead.style.color="#718355";
    
        }
        })  

    })
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        var target = document.querySelector(window.location.hash);
        if (target) {
            target.classList.add("highlight");
            setTimeout(function() {
                target.classList.remove("highlight");
            }, 2000); // Highlight duration
        }
    }
});

var ytLinks = document.getElementsByClassName('ytlink');

for (var i = 0; i < ytLinks.length; i++) {
    ytLinks[i].addEventListener('click', function() {
        var videoId = this.getAttribute('data-video-id'); 
        var iframeHtml = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';

        this.innerHTML = iframeHtml;
    });
}



    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        const formData = {
            name: name,
            email: email,
            message: message
        };

        console.log('Form Data Collected:', formData);

        document.getElementById('contactForm').reset();
    });

