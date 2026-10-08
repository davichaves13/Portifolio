var botaoTema = document.getElementById("botaoTema");

if (localStorage.getItem("tema") == "escuro") {
  document.body.classList.add("escuro");
  botaoTema.innerText = "☀";
}

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    localStorage.setItem("tema", "escuro");
    botaoTema.innerText = "☀";
  } else {
    localStorage.setItem("tema", "claro");
    botaoTema.innerText = "☾";
  }
});


var botaoMenu = document.getElementById("botaoMenu");
var menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

var linksMenu = menu.querySelectorAll("a");
for (var i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
}


var textoCargo = "Desenvolvedor Front-end";
var posicao = 0;
var digitando = document.getElementById("digitando");

function digitar() {
  if (posicao < textoCargo.length) {
    digitando.innerText += textoCargo.charAt(posicao);
    posicao++;
    setTimeout(digitar, 100);
  }
}

digitar();


var elementos = document.querySelectorAll(".aparecer");

function mostrarNoScroll() {
  for (var i = 0; i < elementos.length; i++) {
    var topo = elementos[i].getBoundingClientRect().top;

    if (topo < window.innerHeight - 80) {
      elementos[i].classList.add("mostrar");
    }
  }
}

window.addEventListener("scroll", mostrarNoScroll);
mostrarNoScroll(); 


var projetos = [
  {
    nome: "Sete Camisas",
    tecnologias: "HTML · CSS · JavaScript",
    descricao: "Landing page de uma loja fictícia de camisas de futebol, feita como atividade da escola.",
    link: "https://davichaves13.github.io/setecamisas/"
  },
  {
    nome: "Landing Page",
    tecnologias: "HTML · CSS · JavaScript",
    descricao: "Landing page responsiva feita do zero, focando na organização do layout e nas boas práticas de HTML e CSS.",
    link: "https://davichaves13.github.io/landing-page/"
  }
];

function abrirProjeto(numero) {
  var projeto = projetos[numero];

  document.getElementById("modalNome").innerText = projeto.nome;
  document.getElementById("modalTecnologias").innerText = projeto.tecnologias;
  document.getElementById("modalDescricao").innerText = projeto.descricao;
  document.getElementById("modalLink").href = projeto.link;

  document.getElementById("modalProjeto").classList.add("ativo");
}

function fecharModal(id) {
  document.getElementById(id).classList.remove("ativo");
}

var fundos = document.querySelectorAll(".modal-fundo");
for (var j = 0; j < fundos.length; j++) {
  fundos[j].addEventListener("click", function (evento) {
    if (evento.target == this) {
      this.classList.remove("ativo");
    }
  });
}


var telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {
  var numeros = telefone.value.replace(/\D/g, "");
  numeros = numeros.substring(0, 11);

  if (numeros.length > 10) {
    numeros = numeros.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (numeros.length > 6) {
    numeros = numeros.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (numeros.length > 2) {
    numeros = numeros.replace(/^(\d{2})(\d*)/, "($1) $2");
  } else if (numeros.length > 0) {
    numeros = numeros.replace(/^(\d*)/, "($1");
  }

  telefone.value = numeros;
});


var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); 

  var nome = document.getElementById("nome").value;
  var tel = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

  var tudoCerto = true;

  if (nome.trim().length < 2) {
    document.getElementById("erroNome").innerText = "Digite seu nome.";
    tudoCerto = false;
  } else {
    document.getElementById("erroNome").innerText = "";
  }

  if (tel.replace(/\D/g, "").length < 10) {
    document.getElementById("erroTelefone").innerText = "Digite um telefone válido.";
    tudoCerto = false;
  } else {
    document.getElementById("erroTelefone").innerText = "";
  }


  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    document.getElementById("erroEmail").innerText = "Digite um email válido.";
    tudoCerto = false;
  } else {
    document.getElementById("erroEmail").innerText = "";
  }

  
  if (mensagem.trim().length < 5) {
    document.getElementById("erroMensagem").innerText = "Escreva uma mensagem.";
    tudoCerto = false;
  } else {
    document.getElementById("erroMensagem").innerText = "";
  }

  if (tudoCerto) {
    document.getElementById("modalSucesso").classList.add("ativo");
    formulario.reset();
  }
});