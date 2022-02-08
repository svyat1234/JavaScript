let arrData = [];

const getData = (url) => {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      arrData.push(data);
    })
    .catch((error) => console.log(error));
};

const sendData = (url, method, ) => {
  return fetch(url, {
    method: method,
    body: arrData,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

getData("./db.json");
sendData("https://jsonplaceholder.typicode.com/posts", "POST");