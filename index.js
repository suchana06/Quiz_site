let arr = [
   'WELCOME...',
   'THIS IS A QUIZ SITE...',
   'YOU WILL BE ASKED 10 QUESTIONS...',
   'BASED ON OUR FAVOURITE MCU SUPERHEROS...',
   'LET US SEE WHAT YOU GOT...',
   'TO START THE GAME...',
   'CLICK THE LINK BELOW...'
]
const sleep=async (sec)=>{
      return new Promise((resolve,reject)=>{
         setTimeout(() => {
            resolve(true)
         }, sec*1000);
      })
}
const showhack= async(msg)=>{
   await sleep(2)
   text.innerHTML= text.innerHTML + msg + "<br>"
}
(async()=>{
   for(let i=0;i<arr.length;i++){
     await showhack(arr[i]);
   }
   await sleep(1)
   let p= document.getElementById('btn');
   p.style.color='red';
})()

