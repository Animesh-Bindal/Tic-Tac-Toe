let turn ="X"
let over = false

const win_check = () => {
    let b=document.getElementsByClassName("btext")
    // console.log(b)
    let w=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,5,5,90],
        [1,4,7,15,5,90],
        [2,5,8,25,5,90],
        [0,4,8,5,5,45],
        [2,4,6,25,5,135]]
    w.forEach(e=>{
        // console.log(b[e[0]].textContent , b[e[1]].textContent,b[e[2]].textContent )
        if((b[e[0]].textContent === b[e[1]].textContent) && (b[e[2]].textContent === b[e[1]].textContent) && (b[e[0]].textContent !== "")){
            console.log("Successful")
            document.querySelector('.info').textContent = b[e[0]].textContent + " Won"
            over= true;
            document.querySelector(".imgb").getElementsByTagName('img')[0].style.width= "200px";
            // document.querySelector(".line").style.transition = `width 1s ease-in-out`
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            if((e[0]==0 && e[1]==4 && e[2]==8)||(e[0]==2 && e[1]==4 && e[2]==6)){
                document.querySelector(".line").style.width= "30vw";} 
            else{
                document.querySelector(".line").style.width= "20vw";}
        }
    })
}

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

let b=document.getElementsByClassName("box")
Array.from(b).forEach((e)=>{
    let btextx=e.firstElementChild;
    e.addEventListener('click',()=>{
        if( btextx.textContent == ''){
            btextx.textContent = turn;
            turn = changeTurn();
            win_check();
        }
    })
})

let x= document.getElementById("reset")
x.addEventListener("click",()=>{
    let b=document.getElementsByClassName("btext")
    let i=0;
    Array.from(b).forEach(e=>{
        e.innerText = ""
    });
    over=false;
    document.querySelector(".line").style.width="0vw"
    turn="X";
    document.getElementsByClassName("info")[0].textContent  = "Turn for " + turn;
    document.querySelector(".imgb").getElementsByTagName('img')[0].style.width= "0px";
})