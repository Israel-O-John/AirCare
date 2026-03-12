export async function getCountry() {
  const res = await fetch(
    "https://restcountries.com/v3.1/region/africa?fields=name"
  );

  const data = await res.json();
  return data;
}
