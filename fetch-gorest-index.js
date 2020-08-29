import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// console.log(getSomeDataSynchronously());

// function getSomeDataSynchronously() {
//   return "sync data";
// }

// function resultHandler(data) {
//   console.log("response is " + data);
// }
// function errorHandler(error) {
//   console.log(error.message);
// }

//client side functions
// getSomeDataAsynchronously(
//   function (error) {
//     console.log(error.message);
//   },
//   function (data) {
//     console.log("response is " + data);
//   }
// );

//server side functions
// function getSomeDataAsynchronously(eh, cb) {
//   const returnError = Math.round(Math.random());
//   console.log(returnError);
//   setTimeout(function returnThatData() {
//     if (returnError) {
//       eh(new Error("description of the error"));
//     } else {
//       cb("async data");
//     }
//   }, 500);
// }

// promiseServerside().then(
//   (resolvedData) => {
//     console.log(resolvedData);
//   },
//   (rejectReason) => {
//     console.log(rejectReason);
//   }
// );

// function promiseServerside() {
//   var x = 11;
//   return new Promise((resolve, reject) => {
//     if (x === 10) {
//       resolve("resolved as its 10");
//     } else {
//       reject("x is not 10 rejecting");
//     }
//   });
// }

// getUserID().then(
//   (userID) => {
//     console.log(userID);
//     getUserDetails(userID).then(
//       (userDetails) => {
//         console.log(userDetails);
//       },
//       (rejectReason) => {
//         console.log(rejectReason);
//       }
//     );
//   },
//   (rejectReason) => {
//     console.log(rejectReason);
//   }
// );

//call to get the id and wait until it returns
//use the id that was returned and pass it to the second call

/*
const getAllTheData = async () => {
  try {
    const userId = await getUserID();
    const details = await getUserDetails(userId);
    console.log(
      `The user with id ${userId} is ${details.name} can be reached at ${details.phone}`
    );
  } catch {
    console.log("Caught up with error in between");
  } finally {
    console.log("The end");
  }
};

getAllTheData();

function getUserID() {
  const shouldReject = false; //Math.round(Math.random());
  const randomUserIndex = Math.round(Math.random());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Promise could not be fulfilled");
        // console.log("-----");
      } else {
        resolve(randomUserIndex);
        // console.log("++++++");
      }
    }, 1000);
  });
}

// getUserDetails().then(() => {}, ()=>{});

function getUserDetails(userID) {
  const shouldReject = Math.round(Math.random());
  const users = [
    {
      name: "rod",
      phone: 123456
    },
    {
      name: "Nolan",
      phone: 987456
    }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Promise to return user details could not be fulfilled");
        // console.log("-----");
      } else {
        resolve(users[userID]);
        // console.log("++++++");
      }
    }, 500);
  });
}

*/

async function getTheDetailsUsingFetch() {
  const response = await fetch("https://gorest.co.in/public-api/users", {
    Authorization: "",
    method: "GET"
  });
  if (response.ok) {
    return response.json();
    // let respDataArray = respObj.data;
    // console.log(JSON.stringify(response);
  } else {
    console.log("error occured on the way");
  }
}

getTheDetailsUsingFetch().then((data) => {
  console.log(data);
  console.log(data["code"]);
  console.log(data["meta"]);
  console.log(data["data"]);

  let respArr = data["data"];
  respArr.map((obj) => console.log(obj));

  const nameArr = [];
  const emailArr = [];

  for (var objInResp in respArr) {
    nameArr.push(respArr[objInResp]["name"]);
    emailArr.push(respArr[objInResp]["email"]);
  }

  console.log(nameArr);
  console.log("---------------------------------------");
  console.log(emailArr);
});
