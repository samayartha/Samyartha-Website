(function(){
  var btn = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if(!btn || !nav) return;
  function closeMenu(){
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    btn.querySelector('.icon-menu').style.display = 'block';
    btn.querySelector('.icon-close').style.display = 'none';
  }
  btn.addEventListener('click', function(){
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.querySelector('.icon-menu').style.display = isOpen ? 'none' : 'block';
    btn.querySelector('.icon-close').style.display = isOpen ? 'block' : 'none';
  });
  nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
})();
