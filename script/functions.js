const menuBtn = document.getElementById("menuButton");
const icon = document.getElementById("icono-menu");
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const questions = document.getElementsByClassName("pregunta");
const navLinks = document.querySelectorAll("a.nav-link");
const body = document.getElementById("body");
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("message");
const whatsapp = document.getElementById("whatsapp");
const expresiones = {
  texto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const contactData = {
  nombre: "",
  correo: "",
  mensaje: "",
};

/* const validarNombre = (dato) => {
  if (expresiones.texto.test(dato)) {
    nombre.classList.contains("error")
      ? nombre.classList.replace("error", "success")
      : nombre.classList.add("success");
    contactData.nombre = dato;
  } else {
    nombre.classList.contains("success")
      ? nombre.classList.replace("success", "error")
      : nombre.classList.add("error");
  }
};
const validarEmail = (dato) => {
  if (expresiones.correo.test(dato)) {
    email.classList.contains("error")
      ? email.classList.replace("error", "success")
      : email.classList.add("success");
    contactData.correo = dato;
  } else {
    email.classList.contains("success")
      ? email.classList.replace("success", "error")
      : email.classList.add("error");
  }
};

nombre.addEventListener("keyup", (e) => {
  validarNombre(e.target.value);
});

email.addEventListener("keyup", (e) => {
  validarEmail(e.target.value);
}); */

const noScrollChange = (show) => {
  show ? body.classList.add("no-scroll") : body.classList.remove("no-scroll");
};

const iconChange = (icono) => {
  icono
    ? icon.classList.replace("fa-bars", "fa-xmark")
    : icon.classList.replace("fa-xmark", "fa-bars");
};
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("showMenu");
  header.classList.toggle("menu-header");
  const menuShow = mobileMenu.classList.contains("showMenu");
  iconChange(menuShow);
  noScrollChange(menuShow);

  for (const link of navLinks) {
    link.addEventListener("click", (e) => {
      if (menuShow === true) {
        mobileMenu.classList.remove("showMenu");
        header.classList.remove("menu-header");
        body.classList.remove("no-scroll");
        icon.classList.replace("fa-xmark", "fa-bars");
        //  removeIconn();
        //  noScrollRemove();
      }
    });
  }
});
const sendData = async () => {
  await axios
    .post("./mail.php", contactData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


/* form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.append("nombre", contactData.nombre);
  formData.append("correo", contactData.correo);
  formData.append("mensaje", contactData.mensaje);
  console.log(formData)
  sendData();
  console.log("envandose");
}; */
// Acordeon FAQS

for (const question of questions) {
  const pregunta = question.childNodes[1];
  pregunta.addEventListener("click", () => {
    question.classList.toggle("active");
  });
}

document.addEventListener('scroll', (e)=>{
  if(window.scrollY>100) {
    whatsapp.classList.add('visible')
  }else{
    whatsapp.classList.remove('visible')
  }
})
AOS.init();
