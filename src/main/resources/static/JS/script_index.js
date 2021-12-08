//Eventos
const $frm = document.querySelector("#frm");

async function onSubmit($event) {
    console.log(`$event`, $event);
    $event.preventDefault();
    // debugger;

    console.log(`$event.target`, $event.target);
    const $email = document.querySelector("#email");
    const $password = document.querySelector("#pwd");
    const $passwordError = document.querySelector("#bad-password");

    // const $email=$event.target.querySelector("#email");
    console.log(`email`, $email.value);
    console.log(`$password`, $password.value);
    const emailValue = $email.value.trim();
    const passwordValue = $password.value.trim();
    if (emailValue !== "") {
        console.log(`el email es valido`);
        if (passwordValue !== "") {
            console.log(`la contraseña es valida`);
            await getDataAsync();
        } else {

            $passwordError.classList.remove("d-none")
            $passwordError.classList.add("d-block")
            console.log(`la contraseña no es valida`);
        }
    }
    try {
    } catch (error) {
        console.log(`error`, error);
    }
}

async function getDataAsync() {
    try {
        const url = "http://localhost:8083/api/user/all";
        //console.log(`cargando`);
        const response = await fetch(url);
        const converted = await response.json();
        console.log(`converted`, converted);
        //console.log(`ocultar el loading`);
    } catch (error) {
        console.log(`error`, error);
    }
}



$frm.addEventListener("submit", onSubmit);

// console.log(`$frm`, $frm);


