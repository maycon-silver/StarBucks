let imagem = document.querySelector(".CopoStarbucks")
    let circulo = document.querySelector(".circulo")

    function TrocarImagem(endereçoImagem) {
        imagem.src = endereçoImagem
    }

    function TrocarCor(cor){

        circulo.style.background = cor
    }