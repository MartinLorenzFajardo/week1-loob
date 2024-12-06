document.addEventListener('DOMContentLoaded', function () {
    fetch('../JSON/News_Article_Editor.json')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data); 

            // Sort articles by date
            data.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));

            const newsContainer = document.getElementById('articles-container');

            // Display all articles
            data.forEach((news, index) => {
                const newsCard = document.createElement('div');
                newsCard.classList.add('row', 'mb-4');
            
                // Add slide-in animation
                setTimeout(() => {
                    newsCard.classList.add('slide-in');
                }, index * 200); 
            
                newsCard.innerHTML = `
                    <div class="col-12">
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-md-6">
                                    ${
                                        news.image_url
                                            ? `<img src="${news.image_url}" class="card-img-left" alt="Image" style="width: 100%; height: auto;">`
                                            : `<div class="placeholder-image" style="width: 100%; height: 300px; background: #ccc;">No Image</div>`
                                    }
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <h1 class="card-title">${news.title}</h1>
                                        <p class="card-text"><small class="text-muted">${news.date_published}</small></p>
                                        <p class="card-text">${news.description}</p>
                                        <p class="card-text">Go to Facebook Post</p>
                                        <a href="${news.facebook_url}" target="_blank"><i class="bi bi-facebook"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            
                newsContainer.appendChild(newsCard);
            });
        })
        .catch(error => {
            console.error('Error loading news data:', error);
        });
});
