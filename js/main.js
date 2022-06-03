'use strict';

{
  // intersection Observer API

  function inviewCallback(entries,obs) {
   entries.forEach(entry => {
     if (!entry.isIntersecting) {
       return;
     }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });

  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      }else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');

  const inviewObserver = new IntersectionObserver(inviewCallback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    inviewObserver.observe(el);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}