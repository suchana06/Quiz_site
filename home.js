let answers = [
    'GREEN GOBLIN',
    'STRESS',
    'MAGNETO',
    'HIS WATCH',
    'BILLY CLUB',
    'THE SOUL STONE',
    'THE REALM OF NIDAVELLIR',
    'DISSOCIATIVE IDENTITY DISORDER',
    'AJAX',
    'ALCOHOL'
]
for (let i = 0; i < 10; i++) {
    let txt = document.getElementsByClassName('txt')[i]
    txt.addEventListener(('click'), () => {
        txt.innerHTML = txt.innerHTML + '<br>ANS: ' + answers[i]
    })
}
let jump = document.getElementById('but2');
jump.addEventListener('click',()=>{
    window.open('grade.html')
})
let elem=document.getElementsByClassName('but')
let answer=document.getElementsByClassName('txt1')
    for(let i=0;i<elem.length;i++){
        elem[i].addEventListener('click',()=>{
            elem[i].style.backgroundColor='red'
        })
        
    }
let elem1=document.getElementsByClassName('but1')
    for(let i=0;i<elem1.length;i++){
        elem1[i].addEventListener('click',()=>{
            elem1[i].style.backgroundColor='green'
        })
        
    }