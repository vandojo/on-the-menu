export default class AuthenticationAPI {
  static loginUser(formVals) {
    return fetch(`http://localhost:3002/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formVals),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  static registerUser(formVals) {
    return fetch(`http://localhost:3002/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formVals),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
