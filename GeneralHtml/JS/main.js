"use strict";
const Logo = document.getElementById("logo");
let WIDTH = document.documentElement.clientWidth;
let bodyMain = document.querySelector("main>div").classList;

// 起始欢迎动画
document.querySelector(".welcome").addEventListener("animationend", (e) => { e.currentTarget.classList.add("hidden") });
// 响应式应用列表 点击监听事件
if (WIDTH < 786) {

    let showList = true;
    let el = document.querySelector("#appList");
    let icon = el.firstElementChild.classList;
    let els = el.nextElementSibling.classList;
    // 搜索框对象-----------
    let search = document.querySelector(".icon-search");
    let pEle = search.parentElement.classList;
    // 搜索框对象-----------

    el.addEventListener("click", (e) => {
        // 搜索叉号模式。
        if (pEle.contains("XiangyingSearchBar")) {
            Logo.style.display = "flex";
            pEle.remove("XiangyingSearchBar");
            icon.remove("transtion-rotate");
            icon.remove("icon-icon-guanbi2");
            icon.add("icon-liebiao");
            bodyMain.remove("blurred");
            showList = true;
        } else {
            if (showList) {
                els.add("lsArise");
                icon.remove("icon-liebiao");
                icon.add("transtion-rotate");
                icon.add("icon-icon-guanbi2");
                bodyMain.add("blurred");
            } else {
                els.remove("lsArise");
                els.add("drop-out");
                icon.remove("transtion-rotate");
                icon.remove("icon-icon-guanbi2");
                icon.add("icon-liebiao");
                bodyMain.remove("blurred");
            }
            showList = !showList;
        }
    });
    // 响应式搜索 点击事件
    search.addEventListener(
        "click", (e) => {
            pEle.add("drop-out");
            Logo.style.display = "none";
            pEle.add("XiangyingSearchBar");
            icon.remove("icon-liebiao");
            icon.add("transtion-rotate");
            icon.add("icon-icon-guanbi2");
            if (els.contains("lsArise")) {
                els.remove("lsArise");
            }
            if (!bodyMain.contains("blurred")) {
                bodyMain.add("blurred");
            }
        }
    );
}   //(WIDTH < 786)
