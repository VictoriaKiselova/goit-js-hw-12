import{i as p,S as h,a as f}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const y="/goit-js-hw-12/assets/javascript-8b8307e0.svg",u=document.querySelector(".list-gallery");function L(t){if(t.hits.length===0)return u.innerHTML=null,i.classList.remove("loader"),l.classList.remove("show-button"),p.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:y,color:"#E78E8E",messageColor:"white",timeout:3e3,imageWidth:50,position:"topRight",maxWidth:420});if(t.hits){i.classList.remove("loader"),l.classList.add("show-button");const s=t.hits.map(r=>`<li class="gallery"><a href="${r.largeImageURL}"><img src="${r.webformatURL}" alt="${r.tags}"></a>
   <div class="deskr-container"> <p>Likes<span>${r.likes}</span></p>
    <p>Views<span>${r.views}</span></p>
    <p>Comments<span>${r.comments}</span></p>
    <p>Downloads<span>${r.downloads}</span></p> </div>
  </li>`).join("");u.insertAdjacentHTML("beforeend",s)}new h(".gallery a",{captionDelay:250,captions:!0,captionSelector:"img",captionsData:"alt"}).refresh()}const b="42512841-77167630e6162aef67a2d6614";async function m(t,a){await f.get("https://pixabay.com/api/",{params:{per_page:200,page:a,key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{console.log(s.data),L(s.data),console.log(s.data.totalHits),w(s.data.totalHits)}).catch(s=>{console.log(s)})}const i=document.querySelector(".loading"),l=document.querySelector(".loading-more-img"),v=document.querySelector(".btn-load-box"),g=document.querySelector(".form");let c=1,n;g.addEventListener("submit",t=>{t.preventDefault(),u.innerHTML=null,i.classList.add("loader"),n=t.target.elements.search.value.trim(),n!==""&&(m(n),g.reset())});l.addEventListener("click",t=>{i.classList.add("loader"),v.appendChild(i),c++,m(n,c)});function w(t){console.log(t),console.log(c);let a=c*200;if(console.log(a),a>t)return l.classList.remove("show-button"),p.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",messageColor:"black",timeout:1e3,imageWidth:50,position:"bottomRight",maxWidth:420})}
//# sourceMappingURL=commonHelpers.js.map