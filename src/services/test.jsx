const url =
  "https://azapp-playground-demo-api.azurewebsites.net/api/Accounts/LoginWithCode";

async function test() {
  const response = await fetch(url, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": "string",
        "code": "string",
        "languageID": "string"
      }),

  });
  const data = await response.json()
  console.log(data);
}

export default test