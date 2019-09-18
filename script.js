/* ==================== Links Produtos ===================== */

/* utensilios */
function produto () {
    window.location.href = "produto.html";

}
function pratic0 () {
    window.location.href = "produtos/pratic0.html";

}
function pratic1 () {
    window.location.href = "produtos/pratic1.html";

}
function pratic2 () {
    window.location.href = "produtos/pratic2.html";

}
function pratic3 () {
    window.location.href = "produtos/pratic3.html";

}
function pratic4 () {
    window.location.href = "produtos/pratic4.html";

}
function pratic5 () {
    window.location.href = "produtos/pratic5.html";

}
function pratic6 () {
    window.location.href = "produtos/pratic6.html";

}
function pratic7 () {
    window.location.href = "produtos/pratic7.html";

}
function pratic8 () {
    window.location.href = "produtos/pratic8.html";

}
function pratic9 () {
    window.location.href = "produtos/pratic9.html";

}
function pratic10 () {
    window.location.href = "produtos/pratic10.html";

}
function pratic11 () {
    window.location.href = "produtos/pratic11.html";

}
/* acessorios */
function ass0() {
    window.location.href = "produtos/pratic7.html";

}
function ass1() {
    window.location.href = "produtos/ass1.html";

}
function ass2() {
    window.location.href = "produtos/ass2.html";

}
function ass3() {
    window.location.href = "produtos/ass3.html";

}
function ass4() {
    window.location.href = "produtos/ass4.html";

}
function ass5() {
    window.location.href = "produtos/ass5.html";

}
function ass6() {
    window.location.href = "produtos/ass6.html";

}
function ass7() {
    window.location.href = "produtos/ass7.html";

}
function ass8() {
    window.location.href = "produtos/ass8.html";

}
function ass9() {
    window.location.href = "produtos/ass9.html";

}
function ass10() {
    window.location.href = "produtos/ass10.html";

}
function ass11() {
    window.location.href = "produtos/ass11.html";

}

function kid0() {
    window.location.href = "produtos/kid0.html";

}
function kid1() {
    window.location.href = "produtos/kid1.html";

}
function kid2() {
    window.location.href = "produtos/kid2.html";

}
function kid3() {
    window.location.href = "produtos/kid3.html";

}
function kid4() {
    window.location.href = "produtos/kid4.html";

}
function kid5() {
    window.location.href = "produtos/kid5.html";

}
function kid6() {
    window.location.href = "produtos/kid6.html";

}
function kid7() {
    window.location.href = "produtos/kid7.html";

}



function roupa0() {
    window.location = "produtos/roupa0.html";
}
function roupa1() {
    window.location = "produtos/roupa1.html";
}
function roupa2() {
    window.location = "produtos/roupa2.html";
}
function roupa3() {
    window.location = "produtos/roupa3.html";
}
function roupa4() {
    window.location = "produtos/roupa4.html";
}
function roupa5() {
    window.location = "produtos/roupa5.html";
}
function roupa6() {
    window.location = "produtos/roupa6.html";
}
function roupa7() {
    window.location = "produtos/roupa7.html";
}

/* ======================= Links Produtos acima======================= */





/* ======================= Link de redirecionamento ================== */

function hyper() {
    n = aleatorio();
    const x = document.querySelector('#image');
    if(x == 5) {
        window.open('https://www.instagram.com/rg7_oficial/');
    }else {
        window.open('https://api.whatsapp.com/send?1=ptBR&phone=5538991504044');
    }
    console.log(x);
}



function aleatorio() { 
    let n = Math.floor(Math.random() * 6);
    const result = n;
    const x = document
    return result;
}



function vender() {
    window.open('https://api.whatsapp.com/send?1=ptBR&phone=5538991504044');
}


function carregar() {
    var n = aleatorio();
    let img = document.getElementById("image");
    img.src = `./../_img/banner${n}.png`;
    console.log(n);
}
/* function direcionarAnuncio() {
        window.open('https://www.instagram.com/rg7_oficial/');
    
} */

function carregarBanner() {
    let n = Math.floor(Math.random() * 3);
    let s = Math.floor(Math.random() * 3);
    let anuncio1 = document.querySelector('#banner1');
    anuncio1.src = `_img/anuncio${n}.png`;
    let anuncio2 = document.querySelector('#banner2');
    anuncio2.src = `_img/anuncio${s}.png`;
}

function banner() {
    ajuda = document.querySelector('#ajuda');
    ajuda.style.transform = 'translateY(56px)';
}
function fechar() {
    let x = document.getElementById('ajuda');
    x.style.display = 'none';
}
/* let largura = window.innerWidth;

const cadastrar = document.querySelector('.cadastrar');
cadastrar.style.width = `${largura}px`; */

/* ====================TAMANHO==================== */
function altura() {
    let alt = window.innerHeight;
    let comida = document.querySelector('#comida');
    comida.style.height = `${alt}px`;
}
