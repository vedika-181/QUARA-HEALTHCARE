async function getData() {
  const data = await fetch(`https://api.rootnet.in/covid19-in/stats/latest`, {
      method: 'GET'
  });
  return data.json();
}

let element = document.getElementById('box');
let output = "";

output += `
      <tr>
        <th class="head table">State</th>
        <th class="head table">Confirmed</th>
        <th class="head table">Active</th>
        <th class="head table">Recovered</th>
        <th class="head table">Death</th>
      </tr>

`

for (let i = 0; i < 40; i++) {
getData()
.then(res => {
  const data = res.data.regional;
  var {totalConfirmed, loc, deaths, discharged} = data[i];
  output += `
      <tr>
        <td class="card title table" id="card-title"> ${loc}</td>
        <td class="card subtitle Confirmed table" id="card-subtitle" > ${totalConfirmed}</td>
        <td class="card subtitle Active table" id="card-subtitle" > ${totalConfirmed-(discharged+deaths)}</td>
        <td class="card subtitle Recovered table" id="card-subtitle" style="color: green"> ${discharged}</td>
        <td class="card subtitle Deaths table" id="card-subtitle"> ${deaths}</td>
      </tr>
    `;;
  element.innerHTML = output;

})
.catch(error => console.log(error));
}
