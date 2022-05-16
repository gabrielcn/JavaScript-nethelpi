/* Menu */
$('.servicos').click(function(){
    $('.menu ul .itensservicos').toggleClass('mostra');
});

/* Menu NETPLAN */
$('.netplan').click(function(){
    $('.menu ul ul .itensnetplan').toggleClass('mostra');
});

/* Menu icone*/
$('.iconemenu').click(function(){
    $('.menu ul ul .itensmenu').toggleClass('mostra');
});

/* LEIA MAIS */
function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnLeiaMais=document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none" ){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}

var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript para imagem slider manual navegação 

    var manualNav = function(manual) {
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });


      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;

      });
    });

    // Javascript para imagem de slider rolar automaticamente 

     var repeat = function(activeClass){
     let active =  document.getElementsByClassName('active');
     let i = 1;

     var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i) {
          i = 0;
        }

        if(i >= slides.length) {
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();
