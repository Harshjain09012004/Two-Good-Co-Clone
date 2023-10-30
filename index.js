
var count = 0;
const h1 = document.getElementsByTagName('h1');

function addanimation(){
 
    h1[count].classList.add('h1-animation');
    count = count + 1;
}

h1animation();
function h1animation(){

    setInterval(()=>{
        if(count< h1.length)
        {
            addanimation();
        }
    },300);

}

hideDivChangeImage();
function hideDivChangeImage(){
    
    const navBar = document.querySelector('nav');
    const propertySet = navBar.getBoundingClientRect();

    const linkDiv = document.getElementById("right-links");

    const logo = document.querySelector('#nav-logo');
    const namelogo = document.querySelector('#nav-namelogo');

    window.addEventListener('scroll',()=>{

        if(window.scrollY + 20 >= propertySet.bottom)
        {
            linkDiv.style.transform = 'translate(0px,-100px)';
            namelogo.style.top = "-150px" ;
            logo.style.top = "0px";
        }
        else if (screen.width>700 & window.scrollY -20 <= propertySet.bottom){

            linkDiv.style.transform = 'translate(0px,0px)';
            namelogo.style.top = "0px" ;
            logo.style.top = "150px";
        }

        else{
            namelogo.style.top = "0px" ;
            logo.style.top = "150px";
        }
       
    })
}

changeicon();
function changeicon(){

    window.addEventListener('click',(e)=>{
        const input = document.getElementById("email"); 

        const arrow = document.getElementById("input-arrow")

        if(input.contains(e.target))
        {
            arrow.classList.remove('fa-arrow-right');

            arrow.classList.add('fa-arrow-turn-down');
        }

        else{

            arrow.classList.remove('fa-arrow-turn-down');

            arrow.classList.add('fa-arrow-right');
        }
    })
    
}

selection();
function selection(){
    const selectButtons = document.getElementsByClassName('selection');

    Array.from(selectButtons).forEach((btn)=>{

        btn.addEventListener('click',()=>{
            Array.from(selectButtons).forEach((ele)=>{
                const icon = ele.querySelector('i');

                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            })

            const btnIcon = btn.querySelector('i')

            btnIcon.classList.remove('fa-regular');
            btnIcon.classList.add('fa-solid');
        })
    })
}

messageviewer();
function messageviewer()
{

    const selectButtons = document.getElementsByClassName('selection');

    const message = document.getElementsByClassName('message-div');
    
    Array.from(selectButtons).forEach((btn)=>{

        btn.addEventListener('click',()=>{

            Array.from(message).forEach((mssg)=>{
            
                const mssgDiv = mssg.getElementsByTagName('h2');

                Array.from(mssgDiv).forEach((div)=>{

                    div.classList.remove('h2-animation');
                    div.classList.add('h2-animation-up');

                })
            
                mssg.style.display = 'none';
            })

            var idNumber = btn.id.match(/\d+/);
            const mssgid = `md${idNumber[0]}`;
            
            const correspondingMssg = document.getElementById(mssgid);
            const mssgDiv = correspondingMssg.getElementsByTagName('h2');

            Array.from(mssgDiv).forEach((md)=>{

                md.classList.remove('h2-animation-up');
                md.classList.add('h2-animation');

            })

            correspondingMssg.style.display = 'block';

        })
    })

}

buttonRotation();
function buttonRotation(){

    const wordsContainer = document.querySelector('#animated-selection');
    const words = document.querySelectorAll('.selection');
    const wordCount = words.length;

    let currentIndex = 0;

    const moveForward = () => {
        currentIndex = (currentIndex + 1) % wordCount 
        adjustWords();
    };

    const adjustWords = () => {
        for (let i = 0; i < wordCount; i++) {
            words[i].style.transform = `translateX(${(- currentIndex) *13}vw)`;
        }
    };

    document.querySelectorAll('.selection').forEach((word) => {

        word.addEventListener('click', ()=>{
            moveForward();
        });
    });
    adjustWords(); 
}

cartpanel();
function cartpanel(){

    const rightnav = document.getElementById('right-icons');

    const cartbtn = rightnav.children[1];
    const crossbtn = rightnav.children[2];
    
    const li1 = document.getElementById('nav-namelogo');
    const li2 = document.getElementById('nav-logo');

    const cart = document.getElementById('cart');

    cartbtn.addEventListener('click',()=>{

        const rightlinks = document.getElementsByClassName('color-utility2');

        cartbtn.style.display = 'none';
        crossbtn.style.display = 'flex';
        cart.style.top = '0px';

        Array.from(rightlinks).forEach((ele)=>{

            ele.classList.toggle('color-utility2');
            ele.classList.toggle('color-utility1');
        })

        setTimeout(()=>{
            li1.src = 'whitenamelogo.jpg';
            li2.src = 'whitelogo.jpg';
        },400);
    })
    

    crossbtn.addEventListener('click',(eve)=>{

        const rightlinks = document.getElementsByClassName('color-utility1');

        setTimeout(()=>{
            Array.from(rightlinks).forEach((ele)=>{

            ele.classList.toggle('color-utility1');
            ele.classList.toggle('color-utility2');
        })
        },400)
        
        cartbtn.style.display = 'flex';
        crossbtn.style.display = 'none';
        cart.style.top = '-83vh';

        setTimeout(() => {
            li1.src = 'namelogo.svg';
            li2.src = 'logo.svg';
        },400);
    })
}

movecircle();
function movecircle(){

    const circle = document.getElementById('circle');
    const product = document.getElementById('normal-purchase-section');
        
        product.addEventListener('mousemove',(event)=>{

            circle.style.transform = `translate(${event.clientX-140}px,${ event.clientY-90}px)`

        })
        
        window.addEventListener('scroll',()=>{

            const pointer = document.getElementById("circle");
    
            pointer.style.top = window.scrollY + "px";
        })

        product.addEventListener('mouseleave',()=>{
            circle.style.transform = 'scale(0)';
        })
}
