const brojSavjeta=document.querySelector(".brojSavjeta")
const savjet=document.querySelector(".savjet")
const gumb=document.querySelector(".kocka")

gumb.addEventListener("click",()=>{
    fetch("https://api.adviceslip.com/advice").then(odogovr=>{
        return odogovr.json()
    }).then(data=>{
        const savjetObj=data.slip
        brojSavjeta.textContent=`ADVICE # ${ savjetObj.id}`
        savjet.textContent=`"${ savjetObj.advice}"`
    })
})
