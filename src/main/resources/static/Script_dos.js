const $frm = document.querySelector("#frm");

async function onSubmit($event) {
    console.log(`$event`, $event);
    $event.preventDefault();
    // debugger;

    console.log(`$event.target`, $event.target);
    const $username = document.querySelector("#username");
    const $email = document.querySelector("#email");
    const $password = document.querySelector("#pwd");
    const $passwordDos = document.querySelector("#pwd-dos");
    const $passwordError = document.querySelector("#bad-password");
    const $passwordErrorDos = document.querySelector("#bad-password-dos");

    // const $email=$event.target.querySelector("#email");
    console.log(`username`, $username.value);
    console.log(`email`, $email.value);
    console.log(`$password`, $password.value);
    console.log(`$passwordDos`, $passwordDos.value);
    const emailValue = $email.value.trim();
    const passwordValue = $password.value.trim();
    const passwordDosValue = $passwordDos.value.trim();
    const nameValue = $username.value;
    if (emailValue !== "") {
        console.log(`el email es valido`);
        if (passwordValue !== "") {
            console.log(`la contraseña es valida`);

        } else {

            $passwordError.classList.remove("d-none")
            $passwordError.classList.add("d-block")
            console.log(`la contraseña no es valida`);
        }
        if (passwordDosValue == passwordValue){
            console.log(`confirmacion valida`);
            await sendDataToBackend(emailValue, passwordValue, nameValue);

            }

        }
        else {
            $passwordErrorDos.classList.remove("d-none")
            $passwordErrorDos.classList.add("d-block")
            console.log(`confirmacion no es valida`);
        }

    try {
    } catch (error) {
        console.log(`error`, error);
    }
}

async function sendDataToBackend(email, password, name) {
    try {
        //debugger
        const url = "http://localhost:8083/api/user/new";
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await fetch(url, fetchOptions);
        const responseConverted = await response.json();
        console.log(`responseConverted`, responseConverted);

    } catch (error) {
        console.log(`error`, error);
    }
}

$frm.addEventListener("submit", onSubmit);
