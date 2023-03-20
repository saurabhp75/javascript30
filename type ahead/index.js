const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let locationData = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    locationData = data;
    // console.log(locationData);
  });

const inputElement = document.querySelector(".search");
const listElement = document.querySelector(".suggestions");

function filterData(city, cityList) {
  const filteredArray = cityList.filter((key) => {
    // if (
    //   key.city.toUpperCase().includes(city.toUpperCase()) ||
    //   key.state.toUpperCase().includes(city.toUpperCase())
    // )
    //   return true;
    // return false;
    const matchStr = new RegExp(city, "gi");
    return key.city.match(matchStr) || key.state.match(matchStr);
  });
  return filteredArray;
}

function handleChange(e) {
  // console.log(e);
  // console.log(this.value);
  const filteredData = filterData(this.value, locationData);
  // console.log(filteredData);

  const listElements = filteredData
    .map((key) => {
      const formattedPopulation = parseInt(key.population).toLocaleString(
        "en-us"
      );
      const matchStr = new RegExp(this.value, "gi");
      const cityName = key.city.replace(
        matchStr,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = key.state.replace(
        matchStr,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
      <span>${cityName} ${stateName}</span> 
      <span>${formattedPopulation}</span>
      </li>`;
    })
    .join("");

  listElement.innerHTML = listElements;
}

inputElement.addEventListener("change", handleChange);
inputElement.addEventListener("keyup", handleChange);
