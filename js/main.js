/* Danyx Studio – shared header, footer, WhatsApp button & background slider */
(function () {
  var WA = '254740682321', VELOCE = 'https://www.velocetechcompany.com/';
  /* Swap these for your own studio photos (e.g. 'images/studio-1.jpg') any time */
  var BACKGROUNDS = ['images/bg-studio-1.svg','images/bg-studio-2.svg','images/bg-studio-3.svg','images/bg-studio-4.svg'];
  var SLIDE_MS = 3000;

  var ICON = {
    facebook:'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z',
    x:'M18.2 2h3.3l-7.2 8.3L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.9H5.1L17 20z',
    tiktok:'M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.1 6.1 0 1 0 5.3 6V8.6a7.4 7.4 0 0 0 4.3 1.4V6.8a4.3 4.3 0 0 1-4.3-4.8z',
    instagram:'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.3 5.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z',
    linkedin:'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6c.6-1 2-1.9 4-1.9 4.1 0 4.7 2.7 4.7 6.2V21h-4v-5c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9.5z',
    whatsapp:'M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8zM8.6 7.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.9 4.5 4 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3l-1.6-.8c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.3-.7-.7-1.2-1.5-1.4-1.8-.1-.2 0-.4.1-.5l.4-.4.3-.5c.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4z'
  };
  function svg(n){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+ICON[n]+'"/></svg>';}

  var pages = [['index.html','Home'],['about.html','About'],['services.html','Services'],['portfolio.html','Portfolio'],['academy.html','Academy'],['beats.html','Beats Store'],['contact.html','Contact']];
  var here = location.pathname.split('/').pop() || 'index.html';

  var nav = '<header class="site"><div class="wrap nav"><a class="brand" href="index.html"><img src="images/logo.svg" alt="" width="40" height="40">Danyx <span>Studio</span></a>'+
    '<button class="burger" aria-label="Open menu" aria-expanded="false">☰</button><ul class="menu">'+
    pages.map(function(p){return '<li><a href="'+p[0]+'"'+(p[0]===here?' class="on" aria-current="page"':'')+'>'+p[1]+'</a></li>';}).join('')+
    '<li><a class="cta" href="book.html">Book a Session</a></li></ul></div></header>';

  var socials = ['facebook','x','tiktok','instagram','linkedin'].map(function(n){
    return '<a href="'+VELOCE+'" target="_blank" rel="noopener" aria-label="'+n+'">'+svg(n)+'</a>';}).join('')+
    '<a href="https://wa.me/'+WA+'" target="_blank" rel="noopener" aria-label="WhatsApp">'+svg('whatsapp')+'</a>';

  var foot = '<footer class="site"><div class="wrap"><div class="fgrid">'+
    '<div><a class="brand" href="index.html"><img src="images/logo.svg" alt="" width="40" height="40">Danyx <span>Studio</span></a><p style="margin-top:12px">Maua’s gospel recording studio. God Is My Judge, with an X-Factor.</p><div class="soc">'+socials+'</div></div>'+
    '<div><h4>Quick links</h4><ul>'+pages.map(function(p){return '<li><a href="'+p[0]+'">'+p[1]+'</a></li>';}).join('')+'<li><a href="book.html">Book a Session</a></li></ul></div>'+
    '<div><h4>Get involved</h4><p>Sign up for our newsletter for new releases, beats and lesson openings.</p>'+
    '<form class="nl" action="https://formsubmit.co/edjacradesigns@gmail.com" method="POST"><input type="hidden" name="_subject" value="Danyx Studio newsletter sign-up"><input type="hidden" name="_captcha" value="false"><input type="email" name="email" placeholder="Your email" aria-label="Email address" required><button type="submit">Join</button></form></div>'+
    '<div><h4>Contact us</h4><ul><li><a href="tel:0740682321">Phone: 0740682321</a></li><li><a href="https://wa.me/'+WA+'" target="_blank" rel="noopener">WhatsApp: 0740682321</a></li><li><a href="mailto:edjacradesigns@gmail.com">edjacradesigns@gmail.com</a></li><li>Maua Town, Meru</li></ul></div>'+
    '</div><div class="legalrow"><a href="terms.html">Terms and Conditions</a><a href="privacy.html">Privacy Policy</a></div></div>'+
    '<hr class="thin"><div class="copy wrap">© 2026 Danyx Studio. All rights reserved. There is Power in good music.</div><hr class="thin">'+
    '<div class="copy wrap">Powered by <a href="'+VELOCE+'" target="_blank" rel="noopener">Veloce Tech</a></div></footer>'+
    '<a class="wa" href="https://wa.me/'+WA+'?text=Hello%20Danyx%20Studio" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">'+svg('whatsapp')+'</a>';

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', foot);

  var b = document.querySelector('.burger'), m = document.querySelector('.menu');
  b.addEventListener('click', function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰';});

  /* Background slider: zoom + rotate (CSS), swaps every 3 seconds */
  document.querySelectorAll('.bg-slider').forEach(function(box, k){
    BACKGROUNDS.forEach(function(src, i){var d=document.createElement('div');d.className='bg-slide';d.style.backgroundImage='url('+src+')';box.appendChild(d);});
    var s = box.children, i = k % s.length; s[i].classList.add('active');
    setInterval(function(){s[i].classList.remove('active');i=(i+1)%s.length;s[i].classList.add('active');}, SLIDE_MS);
  });

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    document.querySelectorAll('.hero.small .wrap > h1, .hero.small .wrap > p').forEach(function(el, i){
      el.classList.add('page-reveal');
      el.style.animationDelay = (i * 110) + 'ms';
    });

    var stat = document.querySelector('.stat');
    if (stat && 'IntersectionObserver' in window) {
      var counterObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (!entry.isIntersecting) return;
          counterObserver.unobserve(entry.target);
          entry.target.querySelectorAll('[data-count]').forEach(function(counter){
            var target = Number(counter.getAttribute('data-count'));
            var suffix = counter.getAttribute('data-suffix') || '';
            var start;
            function update(now){
              if (start === undefined) start = now;
              var progress = Math.min((now - start) / 650, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              counter.textContent = Math.round(target * eased) + suffix;
              if (progress < 1) window.requestAnimationFrame(update);
            }
            counter.textContent = '0' + suffix;
            window.requestAnimationFrame(update);
          });
        });
      }, {threshold:0.35});
      counterObserver.observe(stat);
    }

    var homeServices = document.querySelector('.home-services');
    if (homeServices && 'IntersectionObserver' in window) {
      var servicesObserver = new IntersectionObserver(function(entries){
        if (!entries[0].isIntersecting) return;
        servicesObserver.disconnect();
        var title = homeServices.querySelector('.home-services-title');
        var intro = homeServices.querySelector('.home-services-intro');
        var cards = homeServices.querySelectorAll('.card');
        homeServices.classList.add('motion-ready');
        title.classList.add('home-pop');
        function popAt(element, delay){
          window.setTimeout(function(){element.classList.add('home-pop');}, delay);
        }
        function typeAt(element, delay, interval){
          var text = element.textContent;
          window.setTimeout(function(){
            var i = 0;
            element.textContent = '';
            function typeNext(){
              element.textContent = text.slice(0, i + 1);
              i++;
              if (i < text.length) window.setTimeout(typeNext, interval);
            }
            typeNext();
          }, delay);
          return delay + text.length * interval;
        }
        var nextCard = typeAt(intro, 400, 5) + 130;
        cards.forEach(function(card){
          var icon = card.querySelector('.ic');
          var heading = card.querySelector('h3');
          var paragraph = card.querySelector('p');
          popAt(icon, nextCard);
          popAt(heading, nextCard + 400);
          nextCard = typeAt(paragraph, nextCard + 800, 6) + 130;
        });
      }, {threshold:0.12});
      servicesObserver.observe(homeServices);
    }
  }

  /* Pre-select service/package from links like book.html?service=Mixing */
  var q = new URLSearchParams(location.search).get('service');
  if (q) document.querySelectorAll('select[name="service"],select[name="package"]').forEach(function(sel){
    Array.prototype.forEach.call(sel.options,function(o){if(o.value===q)sel.value=q;});});
})();
