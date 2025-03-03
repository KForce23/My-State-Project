document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.attraction-image img, .image-scrolling img, .recreation-item img');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
   
    modal.className = 'modal';
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    images.forEach(image => {
        image.addEventListener('click', () => {
            modalImg.src = image.src;
            modal.classList.add('active');
        });
    });
    
    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    const tableRows = document.querySelectorAll('#overview tbody tr');
    const scrollingText = document.getElementById('scrolling-text');
    const outdoorRecreationText = document.getElementById('outdoor-recreation-text').innerText;
    const shoppingAttractionsText = document.getElementById('shopping-attractions-text').innerText;

    function updateScrollingContent() {
        tableRows.forEach((row, index) => {
            const rect = row.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                switch (index) {
                    case 0:
                        scrollingText.innerText = "Popular Attractions";
                        document.getElementById('image1').style.transform = `translateY(${Math.max(0, rect.top / 5)}px)`;
                        break;
                    case 1:
                        scrollingText.innerText = outdoorRecreationText;
                        document.getElementById('image2').style.transform = `translateY(${Math.max(0, rect.top / 5)}px)`;
                        break;
                    case 2:
                        scrollingText.innerText = shoppingAttractionsText;
                        document.getElementById('image3').style.transform = `translateY(${Math.max(0, rect.top / 5)}px)`;
                        break;
                }
            }
        });
    }

    window.addEventListener('scroll', updateScrollingContent);
    updateScrollingContent();

    scrollingText.classList.add('active');
});
