let icon = document.getElementById("icona");
let tipopsw = document.getElementById("password");
const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];
let avviso = document.getElementById("avviso");
let avvisoreg = document.getElementById("avvisoreg");
let msg = document.getElementById("failed");
let regmsg = document.getElementById("reg-msg");
let signupdiv = document.getElementById("divreg");
let divaccesso = document.getElementById("div-accesso");
console.log(utenti);
console.log(password);

function scopri() {
    icon.classList.toggle("bi-eye-slash");
    icon.classList.toggle("bi-eye");
    if (tipopsw.type == "password") {
        tipopsw.type = "text";
      
    } else {
        tipopsw.type = "password";
    }
} function aprifinestra() {
    window.open("https://www.google.com/?hl=it")
}
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    avviso.classList.remove("errore", "success");
    if (!utenti.includes(user)) {
        msg.innerHTML = "Login failed. User not registered";
        avviso.classList.remove("d-none");
        avviso.classList.add("errore");
        return;
    }
    else if (!password.includes(pass)) {
        msg.innerHTML = "Login failed. Password incorrect";
        avviso.classList.remove("d-none");
        avviso.classList.add("errore");
        return;
    }
    else {
        if (utenti.indexOf(user) === password.indexOf(pass)) {
            msg.innerHTML = "Login successful";
            avviso.classList.remove("d-none");
            avviso.classList.add("success");

            const myTimeout = setTimeout(aprifinestra, 3000);
            return;
        }
        else {
            msg.innerHTML = "Login failed. Password or username incorrect";
            avviso.classList.remove("d-none");
            avviso.classList.add("errore");
            return;
        }
    }
}
function registrazione() {
    let signupuser = document.getElementById("new-user").value;
    let signuppsw = document.getElementById("new-psw").value;
    avvisoreg.classList.remove("errore", "success");
    if (signupuser == "" || signuppsw == "") {
        regmsg.innerHTML = "Inserire nome utente e password";
        avvisoreg.classList.remove("d-none");
        avvisoreg.classList.add("errore");
        return;
    }
    else {
        if (utenti.includes(signupuser)) {
            regmsg.innerHTML = "Nome utente gia esistente";
            avvisoreg.classList.remove("d-none");
            avvisoreg.classList.add("errore");
            return;
        }
        else if (signuppsw.length < 6) {
            regmsg.innerHTML = "La password deve essere lunga almeno 6 caratteri";
            avvisoreg.classList.remove("d-none");
            avvisoreg.classList.add("errore");
            return;
        }
        else {
            utenti.push(signupuser);
            password.push(signuppsw);
            regmsg.innerHTML = "Registrazione avvenuta con successo";
            avvisoreg.classList.remove("d-none");
            avvisoreg.classList.add("success");
            console.log(utenti);
            console.log(password);
            return;
        }
    }

}

function mostra() {
    divaccesso.classList.add("trasparente");
    signupdiv.classList.remove("d-none");
}

function nascondi() {
    divaccesso.classList.remove("trasparente");
    signupdiv.classList.add("d-none");
}