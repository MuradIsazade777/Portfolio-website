document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href'); 
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
const btn = document.getElementById("btn");
btn.addEventListener("click",() =>{
    alert("Please hire me!")
}); 
