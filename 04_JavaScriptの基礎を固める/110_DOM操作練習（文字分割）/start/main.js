document.addEventListener('DOMContentLoaded', function() {
   
   const str = el.innerHTML.trim();
   let concatStr = '';

   for(let c of str) {
     c = c.replace(/\s+/, '&nbsp;');
   }
   el.innerHTML = concatStr;
});


class textAnimetion {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = el.innerHTML.trim().split("");
  }
  _splitText() {
    return str.
  }

  log() {
    console.log(this.el);
  }

}

const ta = new textAnimetion('.animate-title');
ta.log();

