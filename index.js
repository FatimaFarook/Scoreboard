let count = 0;
let number = 0;
let addOneHome = document.querySelector("#plus-one-home-btn");
let addTwoHome = document.querySelector("#plus-two-home-btn");
let addThreeHome = document.querySelector("#plus-three-home-btn");
let addOneGuest = document.querySelector("#plus-one-guest-btn");
let addTwoGuest = document.querySelector("#plus-two-guest-btn")
let addThreeGuest = document.querySelector("#plus-three-guest-btn");
let reset = document.querySelector("#reset-btn");

addOneHome.addEventListener('click', function () {
    count += 1;
    document.querySelector("#home-count").innerText = count;
}
)

addTwoHome.addEventListener('click', function () {
    count += 2;
    document.querySelector("#home-count").innerText = count;
}

)

addThreeHome.addEventListener('click', function () {
    count += 3;
    document.querySelector("#home-count").innerText = count;
}

)
addOneGuest.addEventListener('click', function () {
    number += 1;
    document.querySelector("#guest-count").innerText = number;
}
)


addTwoGuest.addEventListener('click', function () {
    number += 2;
    document.querySelector("#guest-count").innerText = number;
}
)
addThreeGuest.addEventListener('click', function () {
    number += 3;
    document.querySelector("#guest-count").innerText = number;
}
)

reset.addEventListener('click', function () {
    count = 0;
    number = 0;
    document.querySelector("#guest-count").innerText = number;
    document.querySelector("#home-count").innerText = count;
}
)
function increment(btnEl, team, num) {
    count += num
    btnEl.innerText = count
}