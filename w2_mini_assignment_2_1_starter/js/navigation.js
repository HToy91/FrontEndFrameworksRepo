// Create the reusable navigation implementation here.
const navBar = document.getElementById('navbar')
pages = [
    { name: 'Home', url: 'index.html' },
    { name: 'About', url: 'about.html' },
    { name: 'Contact', url: 'contact.html' },
    { name: 'Products', url: 'products.html' },
    { name: 'Services', url: 'services.html' },
]

pages.forEach(page => {
    const navLinks = document.createElement('a')
    navLinks.textContent = page.name
    navLinks.href = page.url

    navBar.appendChild(navLinks)
})