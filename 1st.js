let userscore=0;
        let compscore=0;
        let drawscore = 0;
        
        const choices = document.querySelectorAll(".choice");
        const message = document.querySelector("#message");
        
        const drawsc =document.querySelector("#drawscore");
        const usersc=document.querySelector("#userscore");
        const compsc=document.querySelector("#compscore");
        
        const messagepic=document.querySelector("#messagepic");
        
        const computerch=document.querySelector("#computerch");
        
        compsc.innerText=compscore;
        usersc.innerText=userscore;  
        drawsc.innerText=drawscore;
        
        const gencomputerchoice = () => {
            const options = ["rock", "paper", "scissore"];
            const radinx = Math.floor(Math.random() * 3);
            return options[radinx];
            
        };
        const drawGame = ()=>{
            drawscore++;
            drawsc.innerText=drawscore;
            message.style.backgroundColor="rgb(73, 100, 233)";
            // console.log("game was draw.");
            message.innerText=" Game was draw,please try again ";
        };
        
        const showwinner=(userwin)=>{
            if(userwin){
                userscore++;
                // console.log("You win!");
                message.innerText="You win!";
                message.style.backgroundColor="green"
                compsc.innerText=compscore;
                usersc.innerText=userscore;
            }else{
                compscore++;
                console.log("You lose");
                message.innerText="You lose";
                message.style.backgroundColor="red";
                compsc.innerText=compscore;
                usersc.innerText=userscore;
            }
        };
        const playGame=(userchoice)=>{
            console.log("user choice =",userchoice);
            //Generate computer choice
            const computerchoice = gencomputerchoice();
            console.log("computer choice = ", computerchoice);
            if(userchoice === computerchoice){
        
                //Draw Game
                drawGame();
                computerch.innerText="Computer Choice";
                messagepic.innerHTML=`<div class="choice" id="${computerchoice}"><img src="${computerchoice}.jpg" alt="${computerchoice}"></div>`
            }else{
                let userwin = true;
                if(userchoice=="rock"){
                    userwin = computerchoice==="paper"?false:true;
                    computerch.innerText="Computer Choice";
                    messagepic.innerHTML=`<div class="choice" id="${computerchoice}"><img src="${computerchoice}.jpg" alt="${computerchoice}"></div>`
        
                }else if(userchoice==="paper"){
                    userwin=computerchoice==="scissore"?false:true;
                    computerch.innerText="Computer Choice";
                    messagepic.innerHTML=`<div class="choice" id="${computerchoice}"><img src="${computerchoice}.jpg" alt="${computerchoice}"></div>`
                }else{
                    userwin = computerchoice==="rock"?false:true;
                    computerch.innerText="Computer Choice";
                    messagepic.innerHTML=`<div class="choice" id="${computerchoice}"><img src="${computerchoice}.jpg" alt="${computerchoice}"></div>`
                }
                showwinner(userwin);
            }
        };
        choices.forEach(choice => {
            choice.addEventListener("click",()=>{
                const userChoice = choice.getAttribute("id");
                playGame(userChoice);        
            })
        });