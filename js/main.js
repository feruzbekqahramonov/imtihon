const countryContainer = document.querySelector(".main__container_countries");
const filterButtons = document.querySelector(".form");
const input = document.getElementById('input')

let allData

fetch("https://countries-api-v7sn.onrender.com/countries?limit=250")
  .then((res) => res.json())
  .then(renderCountris)

filterButtons.addEventListener("change", (e) => {
  fetch(`https://countries-api-v7sn.onrender.com/countries?region/${filterButtons.value}`)
    .then((res) => res.json())
    .then(renderCountris)
})

function renderCountris(data) {
  countryContainer.innerHTML = ''
  data.data.forEach((country) => {
    const mainCard = document.createElement("a");
    mainCard.classList.add("main__container_countries--card");
    mainCard.href = `pages/info.html?name=${country.name.common}`;
    mainCard.innerHTML = ` 
            <img src="${
              country.flags.png
            }" alt="Flag photo" width="267" height="160">
            <h4>${country.name.common}</h4>
            <div class="main__container_countries--card__card-body">
                <p>Population: <span>${country.population.toLocaleString(
                  "en-IN"
                )}</span></p>
                <p>Region: <span>${country.region}</span></p>
                <p>Capital: <span>${country.capital}</span></p>
            </div>
    `;
    countryContainer.appendChild(mainCard);
    allData = data
  });
}

input.addEventListener('input', (e) => {
console.log(e.target.value);
console.log(allData);
allData.filter()
})
