export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleDateString("pt-BR", options);
};

export const formatDateWithHours = (data: string): string => {
  const dataObj = new Date(data);

  const dia = dataObj.getDate();
  const mes = dataObj.toLocaleString('default', { month: 'long' });
  const ano = dataObj.getFullYear();
  const hora = dataObj.getUTCHours();
  const minutos = dataObj.getMinutes();

  const dataFormatada = `${dia} de ${mes} de ${ano} às ${hora}:${minutos.toString().padStart(2, '0')}`;

  return dataFormatada;
}