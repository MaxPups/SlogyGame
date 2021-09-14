document.querySelector('#reloadWin').addEventListener('click', ()=>{
    location.reload()
})





// if(document.querySelector('#level').value === 'easy'){
//      arrDivision = [1,2,3,4,5,6,7,8,9];
    
// }
// if(document.querySelector('#level').value === 'middle'){
//       arrDivision = [11,12,13,14,15,16,17,18,19];
     
// }
// if(document.querySelector('#level').value === 'hard'){
//      arrDivision = [32,26,41,53,69,74,,85,98,101];
    
// }
// if(document.querySelector('#level').value === 'very hard'){
//      arrDivision = [2345,8765,1368,9371,8855,1046,4417,9008,1000]
// }

var arrDivision = [1,2,3,4,5,6,7,8,9] /** массив для ячеек*/



var Middle = document.query
arrDivision.sort(()=>{ return 0.5-Math.random() }).map((i)=>{
    var containers = document.querySelector('.containers') 
    var card = document.createElement("div");
    card.classList.add('containers-card')
    containers.append(card)
    card.innerText = i;

})

//  block for create cards withs numbers

var numCard = arrDivision.sort(()=>{ return 0.5-Math.random() })
console.log(numCard);

document.querySelector("#start").addEventListener('click', ()=>{
    var modal = document.querySelector('.modal-window-test')
   modal.classList.add('animate-modal')
    modal.textContent = `Найди число ${numCard[0]}`
    setTimeout(()=>{
        modal.classList.remove('animate-modal')
    }, 3500)
})
document.querySelector("#how__number").addEventListener('click', ()=>{
    var modal = document.querySelector('.modal-window-test')
    modal.classList.add('animate-modal')
    modal.textContent = `Найди число ${numCard[0]}`
    setTimeout(()=>{
        modal.classList.remove('animate-modal')
    }, 3500)
    // alert(`Найди число ${numCard[0]}`) 
})
// переменная которая является правильным ответом

var containers = document.querySelector('.containers')
var result = document.querySelector(".containers-card").textContent /* получить содержимое в теге*/

containers.addEventListener('click', (i)=>{

       if( i.target.textContent === String(numCard[0]))
      {
      i.target.classList.add('resultGood');
      numCard.shift();
      setTimeout(()=>{
        if(numCard[0] === undefined){
            alert('Поздравляю, ты все выполнил!:)')
        }  
          if(numCard[0] !== undefined)
          var modal = document.querySelector('.modal-window-test')
          modal.classList.add('animate-modal')
    modal.textContent = `Найди число ${numCard[0]}`
    setTimeout(()=>{
        modal.classList.remove('animate-modal')
    }, 3500)
      }),1000
      }

       if(i.target.textContent !==  String(numCard[0]))
      {
        i.target.classList.add('resultBad');
        //  alert(`Не вышло, попробуй еще раз! Найди число ${numCard[0]}`);
      }
    
    
})







