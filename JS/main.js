let tiangan = document.getElementById("tiangan-in");
let dizhi = document.getElementById("dizhi-in");
let 天干 = tiangan.children;
let 地支 = dizhi.children;
let angle_tiangan = 0;
let angle_dizhi = 0;
for (i of 天干) {
    i.style = ` transform: rotate(${angle_tiangan}deg);`;
    angle_tiangan += 36;
}
for (i of 地支) {
    i.style = ` transform: rotate(${angle_tiangan}deg);`;
    angle_tiangan += 30;
}
// 外环铭文。
let mingwen = document.querySelector(".nei");
let 铭文 = [...mingwen.textContent.replace(/\s/g, '').toUpperCase()];
let mingwen_init = 0;
let deg_mingwen = 360 / 铭文.length;
mingwen.textContent = '';
铭文.forEach((v, i, arr) => {
    arr[i] = `<span style="transform: rotate(${mingwen_init}deg)">${v}</span>`;
    mingwen.insertAdjacentHTML('beforeend', arr[i]);
    mingwen_init += deg_mingwen;
});
[...document.querySelector(".zhuanqiu").children].forEach((v, i, arr) => {
    arr[i].classList.add("circle");
});
//点击生效下面代码
let Trans = true;
let magic_ring = document.querySelector("#clock");
let HEAD = document.querySelector("head");
magic_ring.addEventListener("click", () => {
    if (Trans) {
        HEAD.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="./style/3d.css" />`);
    } else {
        HEAD.lastElementChild.remove();
    }
    Trans = !Trans;
});