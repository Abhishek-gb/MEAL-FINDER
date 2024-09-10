fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(res => res.json())
  .then(data => {
    const imgContainers = document.querySelectorAll('.img-container');
    data.categories.forEach((category, index) => {
      if (imgContainers[index]) {
        imgContainers[index].innerHTML = `
          <img src="${category.strCategoryThumb}" alt="${category.strCategory}" style="width:100px; height:100px;">
        `;
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));

  // --search button--
document.getElementById('searchButton').addEventListener('click', function() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const categories = document.querySelectorAll('.col-sm-2.mb-3');
  
  categories.forEach(category => {
    const categoryName = category.querySelector('span#top').textContent.toLowerCase();
    if (categoryName.includes(searchInput)) {
      category.style.display = 'block'; 
    } else {
      category.style.display = 'none'; 
    }
  });
});
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('searchButton').click();
  }
});



 