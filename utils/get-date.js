export const getDate = (text) =>{
  if (!text) return new Date().toISOString();

  const [d, t] = text.split(' ');
  const [date, month, year] = d.split('/');
  const [hour, minute] = t.split(':');

  return new Date(+year, +month - 1, +date, +hour, +minute).toISOString();
};
