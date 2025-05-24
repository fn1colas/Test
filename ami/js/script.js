// Toggle mobile navigation
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// Simple property management on admin page
const propertyForm = document.getElementById('propertyForm');
const propertyList = document.getElementById('propertyList');

if (propertyForm && propertyList) {
    propertyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const image = document.getElementById('image').value;

        const li = document.createElement('li');
        li.innerHTML = `<img src="${image}" alt="${title}" style="max-width:100%">` +
            `<h4>${title}</h4><p>${description}</p>`;
        propertyList.appendChild(li);

        propertyForm.reset();
    });
}
