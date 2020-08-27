import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

const apiCall = () => {
  // const dbResult = { fn: "Rod", ln: "Nolan", isVaidUser: true };
  // return dbResult.thisDoesNotExist;
  throw new Error("003");
};

const apiCallBackup = () => true;
let isUserLoggedIn;
try {
  isUserLoggedIn = apiCall();
  console.log(isUserLoggedIn);
} catch (error) {
  console.log("There was an error while making api req-- ", error.message);
  isUserLoggedIn = apiCallBackup();
  console.log("DB backup call successful");
  // Boolean isDBErr = (error.message) === "Database is not available" ? true : false;
  switch (error.message) {
    case "001":
      console.log("handle error 1");
      break;
    case "002":
      console.log("handle error 2");
      break;
    default:
      console.log("an unknown error happened");
  }
} finally {
  console.log("Finally we reached here :)");
}

var somePlayers = {
  111: "Rod",
  222: "Nolan",
  333: 123456
};

console.log(somePlayers);

for (var propName in somePlayers) {
  console.log(propName);
  console.log(somePlayers[propName]);
}

//modern way of using event listener (creating table and adding row on clicks)
const app = document.getElementById("app");
const myTable = document.createElement("table");

const addTable = function () {
  myTable.setAttribute("border", 2);
  myTable.setAttribute("cellpadding", 20);
  myTable.setAttribute("cellspacing", 20);
  myTable.setAttribute("bgcolor", "lightblue");
  app.appendChild(myTable);
  const thead = document.createElement("thead");
  myTable.appendChild(thead);
  const myHeaderRow = document.createElement("tr");
  thead.appendChild(myHeaderRow);
  const headerCell1 = document.createElement("th");
  const headerCell2 = document.createElement("th");
  headerCell1.innerHTML = "header 1";
  headerCell2.innerHTML = "header 2";
  myHeaderRow.appendChild(headerCell1);
  myHeaderRow.appendChild(headerCell2);
  createRowButton.removeEventListener("click", addTable);
};

const createTableButton = document.getElementById("createTable");
const createRowButton = document.getElementById("createRow");

const addRow = function () {
  const row1 = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  row1.appendChild(cell1);
  row1.appendChild(cell2);
  cell1.innerHTML = "row 1 , cell 1";
  cell2.innerHTML = "row 1 , cell 2";

  myTable.appendChild(row1);
  createRowButton.removeEventListener("click", addRow);
};

createTableButton.addEventListener("click", addTable);
createRowButton.addEventListener("click", addRow);
