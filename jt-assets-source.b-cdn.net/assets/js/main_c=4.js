const prefersDarkScheme=window.matchMedia("(prefers-color-scheme: dark)");typeof Cookies.get("useTheme")=="undefined"&&(prefersDarkScheme.matches?(Cookies.set("useTheme","dark"),document.body.setAttribute("use-theme","dark"),document.head.querySelector('meta[name="theme-color"]').setAttribute("content","#242526")):(Cookies.set("useTheme","light"),document.body.setAttribute("use-theme","light"),document.head.querySelector('meta[name="theme-color"]').setAttribute("content","#fbfbfb")));const darkModeToggle=document.querySelector("#darkmode"),isDarkMode=Cookies.get("useTheme")==="dark";darkModeToggle.addEventListener("click",function(){this.checked?(Cookies.set("useTheme","dark"),document.body.setAttribute("use-theme","dark"),document.head.querySelector('meta[name="theme-color"]').setAttribute("content","#242526")):(Cookies.set("useTheme","light"),document.body.setAttribute("use-theme","light"),document.head.querySelector('meta[name="theme-color"]').setAttribute("content","#fbfbfb"))}),darkModeToggle.checked=isDarkMode;function showToast(e){const t=document.createElement("div");t.classList.add("toast","align-items-center"),t.setAttribute("role","alert"),t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.innerHTML=['<div class="d-flex">','  <div class="toast-body">',`    ${e}`,"  </div>",'  <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>',"</div>"].join(""),document.querySelector(".toast-container").append(t);const n=new bootstrap.Toast(t);n.show(),t.addEventListener("hidden.bs.toast",()=>{t.remove()})}const tx=document.getElementsByTagName("textarea");for(let e=0;e<tx.length;e++)tx[e].setAttribute("style","height:"+tx[e].scrollHeight+"px;overflow-y:hidden;resize:none"),tx[e].addEventListener("input",OnInput,!1);function OnInput(){this.style.height=0,this.style.height=this.scrollHeight+"px"}function closeFlyMenu(e){const t=document.querySelector(`[fly-data-toggle=${e}]`),n=document.querySelector(`[fly-toggle-close=${e}]`);t.style.top=null,t.style.transform=null,n.style.display="none",document.querySelector(`[fly-data-toggle=${e}]`).setAttribute("fly-toggle-show","false")}const getAllFlyMenus=[];document.querySelectorAll(".navlist-link[fly-menu-toggle]").forEach(e=>{getAllFlyMenus.push(e.getAttribute("fly-menu-toggle")),e.addEventListener("click",function(){const e=this.getAttribute("fly-menu-toggle"),t=document.querySelector(`[fly-data-toggle=${e}]`),s=t.getAttribute("fly-toggle-show")=="true",n=document.querySelector(`[fly-toggle-close=${e}]`),o=getAllFlyMenus.filter(t=>t!==e);o.map(e=>{closeFlyMenu(e)}),n.addEventListener("click",function(){closeFlyMenu(e)}),s?closeFlyMenu(e):(t.setAttribute("fly-toggle-show","true"),t.style.top="0",t.style.transform="translate(0, -100%)",n.style.display="block")})});function showProfileSubMenu(e){const t=document.querySelector(".profile-menu-fly"),n=document.querySelector(`[item-switch-for=${e}]`);t.style.opacity="0",t.style.visibility="hidden",t.style.position="absolute",t.style.transform="translate(-102%, 0px)",n.style.position="static",n.style.transform="translate(0%, 0%)",n.classList.add("flex-grow-1"),n.style.visibility="visible"}function showProfileMenu(e){const t=document.querySelector(".profile-menu-fly"),n=document.querySelector(`[item-switch-for=${e}]`);n.removeAttribute("style"),t.style.transition="all .15s",t.style.opacity=null,t.style.visibility=null,t.style.position="static",t.style.transform="translate(0%, 0px)"}const dropdownSwitchTarget=document.querySelectorAll("button[dropdown-switch-target]");dropdownSwitchTarget.forEach(e=>{const t=e.getAttribute("dropdown-switch-target");e.addEventListener("click",function(){showProfileSubMenu(t);const e=document.querySelectorAll(".back-to-profile-menu-fly");e.forEach(e=>{e.addEventListener("click",function(){showProfileMenu(t)})})})});const sidebarCanvas=document.getElementById("sidebarCanvas"),humbergerMenuBtn=document.querySelector(".humberger-menu .btn-circle");sidebarCanvas.addEventListener("show.bs.offcanvas",e=>{humbergerMenuBtn.style.transform="rotate(0deg)",humbergerMenuBtn.style.backgroundColor="#4049cc",humbergerMenuBtn.style.color="#fff"}),sidebarCanvas.addEventListener("hide.bs.offcanvas",e=>{humbergerMenuBtn.style.transform=null,humbergerMenuBtn.style.backgroundColor=null,humbergerMenuBtn.style.color=null});const searchBtn=document.querySelector(".search-here"),searchFormAction=document.querySelector(".search-form-action"),isSearchShow=searchFormAction.getAttribute("data-search-action");function showSearchForm(){searchFormAction.setAttribute("data-search-action","open"),searchFormAction.style.transform="translate(0px, 0px)",searchFormAction.style.visibility="visible"}function hideSearchForm(){searchFormAction.setAttribute("data-search-action","close"),searchFormAction.style.transform=null,searchFormAction.style.visibility=null}searchBtn.addEventListener("click",()=>showSearchForm()),document.querySelector(".close-search-form-action").addEventListener("click",()=>hideSearchForm()),document.querySelector(".contents").addEventListener("click",()=>hideSearchForm());function handleEvent(e){console.log(e.type)}function playTrailer(e){const t=e.querySelector("span[data-trailer]");e.contains(t)&&(e.addEventListener("mouseover",function(){loadTrailer(e)}),e.addEventListener("touchmove",function(){loadTrailer(e);const t=document.querySelectorAll(".video-tmb span[data-trailer]"),n=Array.from(t),s=n.filter(t=>t!=e.querySelector("span[data-trailer]"));s.forEach(e=>{const t=e.parentElement;t.contains(t.querySelector("video#trailer-vid"))&&t.querySelector("video#trailer-vid").remove()})}),e.addEventListener("mouseleave",function(){e.querySelector("video#trailer-vid").remove(),e.contains(document.querySelector(".trailer-progress"))&&e.querySelector(".trailer-progress").remove()}))}function loadTrailer(e){const t=e.querySelector("span[data-trailer]");if(e.querySelectorAll("#trailer-vid").length<1){const n=document.createElement("video");n.autoplay=!0,n.muted=!0,n.defaultPlaybackRate=1.5,n.preload="none",n.setAttribute("playsinline",""),n.setAttribute("disableremoteplayback",""),n.setAttribute("id","trailer-vid"),n.setAttribute("src",t.getAttribute("data-trailer"));const s=document.createElement("div");s.classList.add("progress","trailer-progress"),s.setAttribute("role","progressbar"),s.setAttribute("aria-valuenow","0"),s.setAttribute("aria-valuemin","0"),s.setAttribute("aria-valuemax","100"),s.setAttribute("style","height: 4px;"),s.innerHTML=`<div class="progress-bar bg-danger"></div>`,s.style.visibility="visible",s.querySelector(".progress-bar").animate({width:["0%","100%"]},{duration:800}).onfinish=e=>{e.target.effect.target.style.width="100%"},e.append(n,s),n.addEventListener("loadeddata",function(){n.play(),s.remove()}),n.addEventListener("ended",function(){n.remove(),e.contains(document.querySelector(".trailer-progress"))&&e.querySelector(".trailer-progress").remove()})}}document.querySelectorAll(".video-tmb").forEach(e=>{playTrailer(e)}),document.querySelector(".contents").addEventListener("click",function(){document.querySelectorAll(".video-tmb").forEach(e=>{e.contains(document.querySelector("video#trailer-vid"))&&e.querySelector("video#trailer-vid").remove(),e.contains(document.querySelector(".trailer-progress"))&&e.querySelector(".trailer-progress").remove()})}),window.addEventListener("touchcancel",function(e){console.log(e)});const _atp=document.querySelectorAll("#add_to_playlist");_atp.forEach(e=>{e.addEventListener("click",function(){const e=this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".video-link").getAttribute("href").split("/");add_video_playlist_menu(e[4])})});const isCurrentPage=typeof thisPage!="undefined"?thisPage:"";isCurrentPage==""&&isCurrentPage!=="favorite_videos"&&document.querySelectorAll("#remove_from_favorite").forEach(e=>{e.addEventListener("click",function(){const t=e.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("a.video-link").getAttribute("href").split("/");remove_video_from_favorite(e,t[4])})}),document.querySelectorAll("#add_to_favorite").forEach(e=>{e.addEventListener("click",function(){const t=e.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("a.video-link").getAttribute("href").split("/");add_video_to_favorite(e,t[4])})});function remove_video_from_favorite(e,t){ajaxPost(baseurl+"/ajax/favorite_videos",{action:"remove_favorite_videos",vid:t},function(n){const s=JSON.parse(n.responseText);if(s.status==1){showToast(s.message);const n=document.createElement("button");n.classList.add("dropdown-item"),n.setAttribute("id","add_to_favorite"),n.innerHTML=`<span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2. 748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path> </svg> </span> Add To Favorite`,e.replaceWith(n),n.addEventListener("click",function(){add_video_to_favorite(n,t)})}})}function add_video_to_favorite(e,t){ajaxPost(baseurl+"/ajax/favorite_videos",{action:"add_favorite_videos",vid:t},function(n){const s=JSON.parse(n.responseText);if(s.status==1){showToast(s.message);const n=document.createElement("button");n.classList.add("dropdown-item"),n.setAttribute("id","remove_from_favorite"),n.innerHTML=`<span class="text-danger"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"> <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"></path> </svg> </span> Remove from Favorite`,e.replaceWith(n),n.addEventListener("click",function(){remove_video_from_favorite(n,t)})}else if(s.status==403){const e=document.createElement("div");e.classList.add("modal","fade"),e.setAttribute("id","_modal_alert"),e.setAttribute("tab-index","-1"),e.setAttribute("aria-labelledby","_modal_alert"),e.setAttribute("aria-hidden","true");const t=['<div class="modal-dialog modal-dialog-centered">','  <div class="modal-content">','     <div class="modal-header">',`         <h1 class="modal-title fs-6 text-center text-md-start" id="_modal_alert">${s.message}</h1>`,'         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>',"     </div>","  </div>","</div>"];e.innerHTML=t.join(""),document.body.prepend(e),new bootstrap.Modal(document.querySelector("#_modal_alert")).show(),e.addEventListener("hidden.bs.modal",function(){this.remove()})}})}function add_video_playlist_menu(e){const n=e;console.log(n);const t=document.createElement("div");t.classList.add("modal","fade"),t.setAttribute("id","_modal_atp"),t.setAttribute("tab-index","-1"),t.setAttribute("aria-labelledby","_modal_atp"),t.setAttribute("aria-hidden","true");const s=['<div class="modal-dialog modal-dialog-centered">','  <div class="modal-content">','     <div class="spinner-border text-danger d-block my-3 mx-auto" role="status">','       <span class="visually-hidden">Loading...</span>',"     </div>","  </div>","</div>"];t.innerHTML=s.join(""),ajaxPost(baseurl+"/ajax/playlist",{action:"get_playlists",vid:n},function(e){const s=JSON.parse(e.responseText);t.querySelector(".modal-content").innerHTML=s.body,document.body.prepend(t),new bootstrap.Modal(document.querySelector("#_modal_atp")).show(),t.addEventListener("shown.bs.modal",function(){t.querySelector(".create-new-playlist-btn").addEventListener("click",function(){const i=this;i.classList.remove("d-block"),i.classList.add("d-none");const o=t.querySelector(".form-item-container");o.innerHTML=['<div class="playlist-input-group">','   <div class="form-floating mb-2">','     <input type="text" class="form-control" name="new_playlist_input" placeholder="Enter your new playlist name...">','     <label for="new_playlist_input">Playlist Name</label>',"   </div>","</div>",'<div class="playlist-input-group">','   <div class="form-floating mb-2">','       <select class="form-select" name="new_playlist_type">','         <option value="0">Public</option>','         <option value="1">Private</option>',"       </select>",'       <label for="new_playlist_type">Type</label>',"   </div>","</div>",'<div class="d-flex align-items-center justify-content-end">','   <button class="btn hover-secondary me-1" id="cancel_create">Cancel</button>','   <button class="btn btn-danger" id="create_new_playlist">Create</button>',"</div>"].join("");const s=o.querySelector("input[name=new_playlist_input]"),a=o.querySelector("select[name=new_playlist_type]");s.addEventListener("keyup",function(){s.value.length>=4&&s.parentElement.querySelectorAll(".invalid-feedback").length>0&&(s.parentElement.querySelector(".invalid-feedback").remove(),s.classList.remove("is-invalid"))}),o.querySelector("#cancel_create").addEventListener("click",function(){i.classList.add("d-block"),i.classList.remove("d-none"),o.innerHTML=""}),o.querySelector("#create_new_playlist").addEventListener("click",function(){ajaxPost(baseurl+"/ajax/playlist",{action:"create",name:s.value,type:a.value},function(e){const r=JSON.parse(e.responseText);if(r.status==1){const a=document.createElement("div");a.classList.add("playlist-items-select","d-flex","flex-column","justify-content-center","position-relative");const e=document.createElement("input");e.setAttribute("type","checkbox"),e.setAttribute("name","selected_playlist[]"),e.setAttribute("id","items_"+r.pid),e.setAttribute("autocomplete","off"),e.classList.add("form-check-input");const s=document.createElement("label");s.classList.add("btn","hover-secondary","border","d-block","text-start","text-truncate","py-2","fs-5"),s.setAttribute("for","items_"+r.pid),s.setAttribute("style","padding-left: 2.4rem;"),s.innerHTML=r.pin,a.append(e,s),t.querySelector(".playlist-items-content").append(a),o.innerHTML="",i.classList.add("d-block"),i.classList.remove("d-none"),a.querySelector("label[for*=items_]").addEventListener("click",function(){const e=this.getAttribute("for").split("_");ajaxPost(baseurl+"/ajax/playlist",{action:"add_video_playlist",pids:e[1],vid:n},function(e){add_video_to_playlist(e)})})}else if(r.message_pn!=""){if(s.classList.add("is-invalid"),s.parentElement.querySelectorAll(".invalid-feedback").length<1){const e=document.createElement("div");e.classList.add("invalid-feedback"),e.textContent=r.message_pn,s.parentElement.appendChild(e)}}else if(r.message_pt!=""&&(a.classList.add("is-invalid"),a.parentElement.querySelectorAll(".invalid-feedback").length<1)){const e=document.createElement("div");e.classList.add("invalid-feedback"),e.textContent=r.message_pt,a.parentElement.appendChild(e)}})})})}),document.querySelectorAll(".playlist-items-select label.btn").forEach(e=>{e.addEventListener("click",function(){const t=e.parentElement.querySelector("input[id*=items_]").getAttribute("id").split("_");ajaxPost(baseurl+"/ajax/playlist",{action:"add_video_playlist",pids:t[1],vid:n},function(e){add_video_to_playlist(e)})})})}),t.addEventListener("hidden.bs.modal",function(){this.remove()})}function add_video_to_playlist(e){const t=JSON.parse(e.responseText);showToast(t.message)}document.querySelectorAll(".change-language").forEach(e=>{e.addEventListener("click",function(){const e=this.getAttribute("id");document.querySelector('input[name="language"]').value=e,document.querySelector('form[name="languageSelect"]').submit()})})