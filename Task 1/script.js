/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */



const output = document.getElementById('output')
document.getElementById('output').style.display = 'none'

document.getElementById('submit-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const getEl = document.getElementById('search').value

    const divEl = document.createElement('div');

    const kg = document.createElement('h2');
    kg.textContent = getEl + ' Kg is equal to:';

    const lb = document.createElement('h3');
    lb.textContent = 'lb: ' + getEl * 2.2046;

    const g = document.createElement('h3');
    g.textContent = 'g: ' + getEl / 0.0010000;

    const oz = document.createElement('h3');
    oz.textContent = 'oz: ' + getEl * 35.274;

    divEl.append(kg, lb, g, oz);
    output.append(divEl);
    document.getElementById('output').style.display = 'flex'
});

