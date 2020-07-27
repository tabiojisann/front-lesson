const child = document.querySelector('.child');
const cb = function() {
  alert('interesting');
}
const io = new IntersectionObserver(cb);
io.observe(child);