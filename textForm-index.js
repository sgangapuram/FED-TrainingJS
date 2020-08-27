import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

//sample error throwing and handling in JS
// const apiCall = () => {
//   // const dbResult = { fn: "Rod", ln: "Nolan", isVaidUser: true };
//   // return dbResult.thisDoesNotExist;
//   throw new Error("003");
// };

// //try catch finally block usage in JS
// const apiCallBackup = () => true;
// let isUserLoggedIn;
// try {
//   isUserLoggedIn = apiCall();
//   console.log(isUserLoggedIn);
// } catch (error) {
//   console.log("There was an error while making api req-- ", error.message);
//   isUserLoggedIn = apiCallBackup();
//   console.log("DB backup call successful");
//   // Boolean isDBErr = (error.message) === "Database is not available" ? true : false;
//   switch (error.message) {
//     case "001":
//       console.log("handle error 1");
//       break;
//     case "002":
//       console.log("handle error 2");
//       break;
//     default:
//       console.log("an unknown error happened");
//   }
// } finally {
//   console.log("Finally we reached here :)");
// }

// //object with num keys can be used in for looping
// var numKeysObj = {
//   111: "Rod",
//   222: "Nolan",
//   333: 123456
// };
// for (var propName in numKeysObj) {
//   console.log(propName);
//   console.log(numKeysObj[propName]);
// }
// ////object with string keys can be used in for looping
// var stringKeysObj = {
//   "111": "Rod",
//   "222": "Nolan",
//   "333": 123456
// };
// for (var sPropName in stringKeysObj) {
//   console.log(sPropName);
//   console.log(stringKeysObj[sPropName]);
// }

//modern way of using event listener (creating table and adding row on clicks)
// const app = document.getElementById("app");
// const myTable = document.createElement("table");

// const addTable = function () {
//   myTable.setAttribute("border", 2);
//   myTable.setAttribute("cellpadding", 20);
//   myTable.setAttribute("cellspacing", 20);
//   myTable.setAttribute("bgcolor", "lightblue");
//   app.appendChild(myTable);
//   const thead = document.createElement("thead");
//   myTable.appendChild(thead);
//   const myHeaderRow = document.createElement("tr");
//   thead.appendChild(myHeaderRow);
//   const headerCell1 = document.createElement("th");
//   const headerCell2 = document.createElement("th");
//   headerCell1.innerHTML = "header 1";
//   headerCell2.innerHTML = "header 2";
//   myHeaderRow.appendChild(headerCell1);
//   myHeaderRow.appendChild(headerCell2);
//   createRowButton.removeEventListener("click", addTable);
// };

// const createTableButton = document.getElementById("createTable");
// const createRowButton = document.getElementById("createRow");

// const addRow = function () {
//   const row1 = document.createElement("tr");
//   const cell1 = document.createElement("td");
//   const cell2 = document.createElement("td");
//   row1.appendChild(cell1);
//   row1.appendChild(cell2);
//   cell1.innerHTML = "row 1 , cell 1";
//   cell2.innerHTML = "row 1 , cell 2";

//   myTable.appendChild(row1);
//   createRowButton.removeEventListener("click", addRow);
// };

// createTableButton.addEventListener("click", addTable);
// createRowButton.addEventListener("click", addRow);

// const acceptButton = document.getElementById("accbtn");
// acceptButton.addEventListener("click", clickFun);

// const declineButton = document.getElementById("decbtn");
// declineButton.addEventListener("click", clickFun);
// declineButton.addEventListener("mouseenter", clickFun);

// function clickFun(event) {
//   console.log(event.type);
//   console.log(event.target.id);

//   if (event.target.id === "accbtn") {
//     console.log("handling the accept button");
//   }
//   if (event.target.id === "decbtn") {
//     console.log("handling the decline button");
//   }
// }

console.log("Entered the page first time");

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitHandlerFun);

// const goButton = document.getElementById("goButton");
// goButton.addEventListener("submit", goButtonHandler);

function submitHandlerFun(event) {
  event.preventDefault(); //prevents refreshing/submittingcontent to the same page
  console.clear();
  console.log("form was submitted by " + event.type + " action");
  // console.log(typeof document.getElementById("rememberme").value);
  console.log(document.getElementById("rememberme").checked);
  console.log(document.getElementById("fname").value);
  console.log(document.getElementById("lname").value);

  let rememberText = document.getElementById("rememberme").checked
    ? "Remember on"
    : "Remember off";
  console.log(rememberText);

  if (document.getElementById("rb1").checked) {
    console.log("morning \n");
  } else if (document.getElementById("rb2").checked) {
    console.log("afternoon \n");
  } else if (document.getElementById("rb3").checked) {
    console.log("evening \n");
  }

  // console.log(document.get);

  console.log(document.getElementById("stateselector").value);
  console.log(document.getElementById("comments").value);

  let formAlertText = [];
  formAlertText.push(document.getElementById("fname").value + "\n");
  formAlertText.push(document.getElementById("lname").value + "\n");
  formAlertText.push(rememberText + "\n");

  if (document.getElementById("rb1").checked) {
    formAlertText.push("morning \n");
  } else if (document.getElementById("rb2").checked) {
    formAlertText.push("afternoon \n");
  } else if (document.getElementById("rb3").checked) {
    formAlertText.push("evening \n");
  }
  formAlertText.push(document.getElementById("stateselector").value + "\n");
  formAlertText.push(document.getElementById("comments").value + "\n");

  alert(formAlertText);
}

// function goButtonHandler(event) {
//   console.log("go button clicked");
// }
