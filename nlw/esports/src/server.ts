import express from "express";

const app = express();
//rota da aplicação
app.get("/ads", (request, response) => {
  return response.json([
    {
      id: 1,
      name: "ad 1",
    },
    {
      id: 2,
      name: "ad 2",
    },
    {
      id: 3,
      name: "ad 3",
    },
    {
      id: 4,
      name: "ad 5",
    },
    {
      id: 5,
      name: "ad 5",
    },
  ]);
});

app.listen(3333);
