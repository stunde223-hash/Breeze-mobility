const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();menu?.focus();}});
document.querySelectorAll('.media img').forEach(image=>{
 const failed=()=>{image.style.visibility='hidden';const status=image.parentElement.querySelector('.image-status');if(status)status.hidden=false;};
 image.addEventListener('error',failed);
 if(image.complete && !image.naturalWidth)failed();
});
document.querySelector('#year')?.replaceChildren(String(new Date().getFullYear()));
