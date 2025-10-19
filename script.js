function showSection(sectionId) {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });

  document.getElementById(sectionId).style.display = 'block';
}
    function loadMarkdown(file) {
      fetch(file)
        .then(response => response.text())
        .then(text => {
          document.getElementById('content').innerHTML = marked.parse(text);
        });
    }