// attach listeners to all navbar links
const links = document.querySelectorAll('.link-header');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();  // stop the page from jumping up
    const targetId = link.textContent.toLowerCase(); // "about", "posts", "projects"
    showSection(targetId);
    highlightCurrentSection(targetId);
  });
});


function showSection(sectionId) {
  sections.forEach(section => {
    section.style.display = (section.id === sectionId) ? 'block' : 'none';
  });
}

function highlightCurrentSection(sectionId) {
  links.forEach(link => {
    const id = link.textContent.toLowerCase();
    if (id === sectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
document.querySelectorAll('.post a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const url = link.getAttribute('href');

        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const bodyContent = doc.body.innerHTML;

                const postsSection = document.getElementById('posts');
                postsSection.innerHTML = bodyContent;
                if (window.MathJax && window.MathJax.typesetPromise) {
  MathJax.typesetPromise([postsSection]);
}
            })
            .catch(error => {
                console.error('Error loading post:', error);
            });
    });
});


showSection('about');
highlightCurrentSection('about');