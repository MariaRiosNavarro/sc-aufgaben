let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

let metalNameArray = [];
let preiseArray = [];
let changeArray = [];

edelMetallPreise.forEach((metal) => {
  let metalName = metal.name;
  metalNameArray.push(metalName);
  let preise = metal.preiseGramEuro;
  preiseArray.push(preise);
  let change = metal.veraenderung;
  changeArray.push(change);
});

console.log("///////////Namen/////////////");

metalNameArray.map((item, index) => {
  console.log(item, "index->", index);
});

console.log("///////////preise/////////////");

preiseArray.map((item, index) => {
  console.log(item, "index->", index);
});

console.log("///////////change/////////////");

changeArray.map((item, index) => {
  console.log(item, "index->", index);
});

console.log("///////////preise >50/////////////");

preiseArray.filter((item) => (item > 50 ? console.log(item) : ""));

//---------////////table/////////////

const table = document.createElement("table");
table.style.margin = "4rem";
table.style.outline = "9px double green";
document.body.children[1].appendChild(table);

//--------/////////Extract Keys////////////

let titles = [];

// in allen objecten von dem array
for (let i = 0; i < edelMetallPreise.length; i++) {
  // sucht alle keys
  for (const key in edelMetallPreise[i]) {
    // wenn die key NICHT in den array titles ist,
    // füge die hinzu, ansonsten macht nicht
    !titles.includes(key) ? titles.push(key) : "";
  }
}

//---------////////header der table///////////

titles.map((title) => {
  let th = document.createElement("th");
  table.appendChild(th);
  th.style.outline = "3px solid gray";
  th.style.padding = "1rem";
  //   th.style.margin = "3px";
  th.textContent = title;
});

// ----------- Zellen---

console.log("test-------------");

let row = edelMetallPreise.forEach((metal) => {
  // --- Lang Version
  //   let metalName = metal.name;
  //   let preis = metal.preiseGramEuro;
  //   let change = metal.veraenderung;
  //   let tr = document.createElement("tr");
  //   table.appendChild(tr);
  //   let thName = document.createElement("td");
  //   thName.style.border = "1px solid gray";
  //   let thPreis = document.createElement("td");
  //   thPreis.style.border = "1px solid gray";
  //   let thChange = document.createElement("td");
  //   thChange.style.border = "1px solid gray";
  //   tr.appendChild(thName);
  //   tr.appendChild(thPreis);
  //   tr.appendChild(thChange);
  //   thName.textContent = metalName;
  //   thPreis.textContent = preis;
  //   thChange.textContent = change;
  // --- Compact Version
  let tr = document.createElement("tr");
  table.appendChild(tr);
  for (const key in metal) {
    // jede value des Objects
    const value = metal[key];
    console.log(value);
    // wir  machen eine zelle
    let td = document.createElement("td");
    // wir fügen diese zelle an den row von oben
    tr.appendChild(td);
    // wir geben der value
    td.textContent = value;
    // styles
    td.style.border = "1px solid gray";
  }
});
