const getRecepies = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

getRecepies();
