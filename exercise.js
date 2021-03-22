//https://restcountries.eu/rest/v2/all

const fetchCountry = async () => {
  let dropdown = document.getElementById('dropdown');
  try {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`);

    const data = await res.json();

    for (var i = 0; i < data.length; i++) {
      var opt = data[i].name
      console.log(opt)
      var el = document.createElement('option');
      el.textContent = opt;
      el.value = opt;
      dropdown.append(el);
      console.log(el.value);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchCountry();

/*
let defaultOption = document.createElement('option');

const fetchRegion = async () => {
 
  let dropdown = document.getElementById('dropdown');
  const region = dropdown.options[dropdown.selectedIndex].value;
  const res = `https://restcountries.eu/rest/v2/region/${region}`;
  console.log(res);
};


fetchRegion();

*/

/*
   let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[0]
      dropdown.add(option);
    }
*/
