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

showSection('about');
highlightCurrentSection('about');