function skillsMember() {
  const member = document.getElementById('skills-member');
  const memberList = document.getElementById('skills-member-list');
  member.addEventListener('click', () => {
    if (memberList.classList.contains('open')) {
      memberList.classList.remove('open');
    } else {
      memberList.classList.add('open');
    }
  });
}