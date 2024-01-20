const countryName = new URLSearchParams(location.search).get('name')
const flagPhoto = document.querySelector('.main-information-of-the-state img')
const stateName = document.querySelector('.block h2')
const nativeName = document.querySelector('.native')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const domain = document.querySelector('.domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([country]) => {
        console.log(country)
       flagPhoto.src = country.flags.png
       stateName.innerHTML = country.name.common
       if(country.name.nativeName) {
        nativeName.innerText = Object.values(country.name.nativeName)[0].common
       } else {
        nativeName.innerText = country.name.common
       }
       population.innerHTML = country.population
       region.innerHTML = country.continents[0]
       subRegion.innerHTML = country.subregion
       capital.innerHTML = country.capital[0]
       capital.innerText = country.capital?.[0]
       domain.innerText = country.tld[0]
       languages.innerHTML = country.languages[0]
})
  