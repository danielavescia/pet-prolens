const API_URL = ` https://api.thecatapi.com/v1/images/search?limit=50&mime_types=jpg,png&API_KEY=live_15blmkjppU5oGiAHrrACUDN8gZdJxhoh1JRHwgmCjhRzfaDNyiQSYRw2AOsjJx2d`;
const API_KEY =
  "live_15blmkjppU5oGiAHrrACUDN8gZdJxhoh1JRHwgmCjhRzfaDNyiQSYRw2AOsjJx2d";

const CatApiService = {
  fetchData: () => {
    return fetch(API_URL, {
      headers: {
        "x-api-key": API_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Desculpe, mas houve um erro ao carregar as imagens");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Desculpa, mas houve um erro:", error);
        throw error;
      });
  },
};

export default CatApiService;
