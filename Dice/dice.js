function shuffle() {
    const img = document.querySelector('#img');
    let rondomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(rondomNumber);
    img.setAttribute("src", `${rondomNumber}.png`);
}


function anim(){
    setTimeout(shuffle , 2000);
    const img = document.querySelector('#img');
    img.setAttribute("src", "gif.gif");


}

const btn = document.querySelector('.btn');
btn.addEventListener('click', anim);