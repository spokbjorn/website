const bears = [
    "images/coffeebear.png",
    "images/flowerbear.png",
    "images/headphonebear.png",
    "images/mindblownbear.png",
    "images/pridebear.png",
    "images/spokbjorn.png",
    "images/woodbear.png",
    "images/diamondbear.png",
    "images/fortunebear.png",
    "images/lemonbear.png",
    "images/moonbear.png",
    "images/robotbear.png",
    "images/sunbear.png",
];

const randombear = document.getElementById("randombear");
const whichImage = Math.round(Math.random() * (bears.length - 1));
randombear.setAttribute("src", bears[whichImage])