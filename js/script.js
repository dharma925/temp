const splash = document.querySelector('.intro')

document.addEventListener('DOMContentLoaded', (e) =>{
    setTimeout(()=>{
        splash.classList.add('display-none');
		window.scrollTo(0,0);
    }, 3020)
})




function opentab(tabname){
    var i;
    var x=document.getElementsByClassName("container_4");
    for (i=0; i<x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabname).style.display = "flex";
}

function stars(){
    let count = 40;
    let scene = document.querySelector('.scene')
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x =Math.floor(Math.random()*window.innerWidth);
        let duration = Math.random()*1;
        let h = Math.random()*100;

        star.style.left = x +'px';
        star.style.width = 1 + 'px';
        star.style.height = 50+h + 'px';
        star.style.animationDuration = duration + 's'

        scene.appendChild(star);
        i++
    }
}
// stars();


function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');

}




function reveal(event){
	var para = document.getElementById("hiddentext");
	para.style.transform="translateY(-0.5vh)";
    para.style.transition = 1+'s';
    // para.style.transitionDelay = 1+'s';
    var caption = document.getElementById("captionhidden");
	caption.style.transform= "translateX(27em)";
    caption.style.transition = 1+'s';
    // caption.style.transitionDelay = 1+'s';
    var back = document.getElementById("cont");
	back.style.opacity= 1;
    back.style.transition = 1+'s';
    console.log("detected");


}

function showmenu(){
    var menbar = document.getElementById("mainmen");
    const cs = window.getComputedStyle(menbar).display;
    if (cs === "flex"){
        menbar.style.display = "none";
    }
    else if (cs === "none"){
        menbar.style.display = "flex";
    }

}


function closeham(){
    var menbar = document.getElementById("mainmen");
    menbar.style.display = "none";
}



/* Parallax on mousemove*/

document.addEventListener("mousemove",parallaxm);

function parallaxm(e){
    this.querySelectorAll(".layersp").forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/50
        const y = (window.innerHeight - e.pageY*speed)/50
        layer.style.transform = "translateX("+x+"px) translateY("+y+"px)" ;
        // console.log("mouse move detectewd"+x+"y is"+y);
    })
}

// Intro circles

const intro = document.getElementById("pakodi");

for (let i=0;i<51;i++){
    let div = document.createElement("div")
    let animeCircles = intro.appendChild(div);
    animeCircles.classList.add("anime-circle");
}

let circles = document.querySelectorAll(".anime-circle");
let randomAnimation = anime({
    targets : circles,
    background : ()=>{
        let hue = anime.min.random(0,360);
        let saturation = 60;
        let lumonisity = 70;
        let hslValue = "hsl("+hue+","+saturation+"%,"+lumonisity+"%)"
        return hslValue
    },
    borderRadius: ()=>{
        return anime.random(25,50);
    },
    translateX: ()=>{
        return anime.random(-80,80)+"vh";
    },
    translateY: ()=>{
        return anime.random(-80,80)+"vh";
    },
    scale: ()=>{
        return anime.random(0.45,1.75);
    },
    duration: ()=>{
        return anime.random(250,1500)
    },
    delay: ()=>{
        return anime.random(500,1000);
    },
    loop: true,
    direction: "alternate",
    easing: "easeOutExpo"
})