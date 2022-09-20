console.log('JavaScript is working!')
fetch('https://veterinarian.onrender.com/corsenabled')
  .then((response) => response.json())
  .then((data) => console.log(data));