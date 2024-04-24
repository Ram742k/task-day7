fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log('Countries with Population < 2 Lakhs:', countriesWithLowPopulation.map(country => country.name.common));
  })
  .catch(error => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Fetch operation completed.');
  });
