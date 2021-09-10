const birthYear = document.querySelector("#birthYearInput");
const displayAge = document.querySelector(".displayAge");

birthYear.addEventListener("input", myAge);

let yearOfBirth = birthYear.value;

function myAge() {
    if (birthYear.value) {

        if (birthYear.value == 2020) {
            displayAge.innerText = `Oh! you are just a newborn baby`;

        } else {

            if (birthYear.value > 2020) {
                displayAge.innerText = `You should be born in the future`;

            } else {

                if (birthYear.value < 0) {
                    displayAge.innerText = `Oh I don't calculate backward`;

                } else {
                    age = new Date().getFullYear() - birthYear.value;

                    if (age > 1) {
                        displayAge.innerText = `You are now ${age} years old`;

                    } else {
                        displayAge.innerText = `Wow! You are a year Old`;
                    }
                }
            }
        }
    }
}
