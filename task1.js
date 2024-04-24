fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries.map(country => country.name.common));
  })
  .catch(error => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('Fetch operation completed.');
  });
