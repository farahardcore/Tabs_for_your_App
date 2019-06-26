'use strict';
function makeTabs(vTab, vInfo, vTabContent, cHide, cShow){
    let tab = document.querySelectorAll("." + vTab),
        info = document.querySelector("." + vInfo),
        tabContent = document.querySelectorAll("." + vTabContent);
    function hideTabContent(a) {
    for(let i = a; i < tabContent.length;i++) {
        tabContent[i].classList.remove(cShow);
        tabContent[i].classList.add(cHide);
    }
};
hideTabContent(1);
function showTabContent(b) {
    if(tabContent[b].classList.contains(cHide)) {
        tabContent[b].classList.remove(cHide);
        tabContent[b].classList.add(cShow);
    }
};
info.addEventListener("click", function(e){
    let target = e.target;
    if(target && target.classList.contains(vTab)){
        for(let i = 0; i < tab.length;i++){
            if(target == tab[i]){
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});
};
