/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


const main = async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    displayData(data);
};
main();


function displayData(value) {
    value.forEach((item) => {

        const divEl = document.createElement('div');

        const brand = document.createElement('h2');
        brand.textContent = item.brand;

        const models = document.createElement('p');
        models.textContent = item.models;

        divEl.append(brand, models);
        output.append(divEl);


    });
}

