import axios from "axios";

function GotServices() {
  const apiUrl = "https://api.json-generator.com/";
  const apiToken = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
    headers: { Authorization: "Bearer " + apiToken },
  });

  instance
    .get("templates/ZM1r0eic3XEy/data")
    .then(console.log)
    .catch(console.log);
}

export default GotServices;
