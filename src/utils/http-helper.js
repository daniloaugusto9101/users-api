export const ok = (data) => {
  return {
    statusCode: 200,
    body: data,
  };
};
export const serverError = () => {
  return {
    statusCode: 500,
    body: "Erro no servidor",
  };
};

export const badRequest = (error) => {
  return {
    statusCode: 400,
    body: error.message,
  };
};

export const notFound = (message = "Não ha usuário para exibir") => ({
  statusCode: 404,
  body: { message },
});
