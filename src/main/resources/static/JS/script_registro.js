const $frm = document.querySelector("#frm");

async function onSubmit($event) {
    console.log(`$event`, $event);
    $event.preventDefault();
    // debugger;

    console.log(`$event.target`, $event.target);
    const $username = document.querySelector("#username");
    const $identification = document.querySelector("#identification");
    const $birthday = document.querySelector("#birthday");
    const $monthbirthday = document.querySelector("#monthbirthday");
    const $address = document.querySelector("#address");
    const $cellphone = document.querySelector("#cellphone");
    const $zone = document.querySelector("#zone");
    const $type = document.querySelector("#type");
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
    const identificationValue = $identification.value;
    const birthdayValue = $birthday.value;
    const monthbirthdayValue = $monthbirthday.value;
    const addressValue = $address.value;
    const cellphoneValue = $cellphone.value;
    const zoneValue = $zone.value;
    const typeValue = $type.value;

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
            await sendDataToBackend(emailValue, passwordValue, nameValue, identificationValue, birthdayValue, monthbirthdayValue, addressValue, cellphoneValue, zoneValue,  typeValue );

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

async function sendDataToBackend(email, password, name, identification, birthday, monthbirthday, address, cellphone, zone, type) {
    try {
        //debugger
        const url = "http://localhost:8083/api/user/new";
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                identification: identification,
                birthtDay: birthday,
                monthBirthtDay: monthbirthday,
                address: address,
                cellphone: cellphone,
                zone: zone,
                type: type,

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
