// TO DO : Place API calls here
export async function fetchDatas(url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}
