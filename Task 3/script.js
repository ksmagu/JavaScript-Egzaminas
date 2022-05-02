/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


document.getElementById('btn').addEventListener('click', () => {
    const main = async () => {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        displayData(data);
    };
    main();


    function displayData(value) {
        value.forEach((item) => {

            const avatar = document.createElement('img');
            avatar.src = item.avatar_url;

            const divEl = document.createElement('div');

            const login = document.createElement('h3');
            login.textContent = item.login;

            divEl.append(avatar, login);
            output.append(divEl);


        });

    }
    document.getElementById('message').style.display = 'none'
});