fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total Population:', totalPopulation);
  })
  .catch(error => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Fetch operation completed.');
  });
