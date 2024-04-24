fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithUSD = data.filter(country => country.currencies && country.currencies.USD);
    if (countriesWithUSD.length > 0) {
      console.log('Countries that use USD as currency:');
      countriesWithUSD.forEach(country => {
        console.log('- ' + country.name.common);
      });
    } 
  })
  .catch(error => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Fetch operation completed.');
  });
