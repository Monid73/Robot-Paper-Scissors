let player1 = true;
let player2 = false;
let choice_player1;
let choice_player2;
let cp1 = document.querySelector(".choice-player-1");
let cp2 = document.querySelector(".choice-player-2");
// let cp1_move_left =
// let cp1_move_top =
// let cp2_move_left =

const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})

tl.fromTo('.blox-container', {scale: 0}, {scale: 1, ease: 'elastic.out(0.4, 0.8)', duration: 1.5})
tl.fromTo('.choice-player-1, .choice-player-2', {opacity: 0, y:-50}, {ease: 'elastic.out(1.2, 0.6)', opacity: 1, y:0}, '<50%')
tl.fromTo('.rock, .rock-1', {x:60, y:60, opacity: 0}, {x:0, y:0, opacity:1},)
tl.fromTo('.paper, .paper-1', {y:60, opacity: 0}, {y:0, opacity:1}, '<')
tl.fromTo('.scissors, .scissors-1', {x:-60, y:60, opacity: 0}, {x:0, y:0, opacity:1}, '<')
tl.fromTo('.letter-A, .letter-J', {x:20, opacity: 0}, {x:0, ease: 'elastic.out(1.2, 0.8)', rotation: '-6deg', opacity:1, duration: 1})
tl.fromTo('.letter-S, .letter-K', {y:20, opacity: 0}, {y:0, ease: 'elastic.out(1.2, 0.8)', opacity:1, duration: 1}, '<')
tl.fromTo('.letter-D, .letter-L', {x:-20, opacity: 0}, {x:0, ease: 'elastic.out(1.2, 0.8)', rotation: '6deg', opacity:1, duration: 1}, '<')

document.addEventListener('keydown', function(arg){
    if (arg.code == "KeyA") {
        gsap.fromTo('.choice-player-1', {y: 20}, {y:0, ease: 'elastic.out(1.4, 0.3)'})
        gsap.fromTo('.open-hand', {y:-70, x:-80, opacity:0}, {y:0, x:0, rotation: '40deg', opacity:1, duration:0.45})
    }
    if (arg.code == "KeyS") {
        gsap.fromTo('.choice-player-1', {y: 20}, {y:0, ease: 'elastic.out(1.4, 0.3)'})
        gsap.fromTo('.open-hand', {y:-70, x:-80, opacity:0}, {y:0, x:0, rotation: '25deg', opacity:1, duration:0.45})
    }
    if (arg.code == "KeyD") {
        gsap.fromTo('.choice-player-1', {y: 20}, {y:0, ease: 'elastic.out(1.4, 0.3)'})
        gsap.fromTo('.open-hand', {y:-70, x:-80, opacity:0}, {y:0, x:0, rotation: '40deg', opacity:1, duration:0.45})
    }

    if (arg.code == "KeyJ") {
        gsap.fromTo('.choice-player-2', {y: 20}, {y:0, ease: 'elastic.out(1.4, 0.3)'})
        gsap.fromTo('.open-hand-1', {y:-70, x:80, opacity:0}, {y:0, x:0, rotation: '-10deg', opacity:1, duration:0.45})
    }
    if (arg.code == "KeyK") {
        gsap.fromTo('.choice-player-2', {y: 20}, {y:0, ease: 'elastic.out(1.4, 0.3)'})
        gsap.fromTo('.open-hand-1', {y:-70, x:80, opacity:0}, {y:0, x:0, rotation: '-25deg', opacity:1, duration:0.45})
    }
    if (arg.code == "KeyL") {
        gsap.fromTo('.choice-player-2', {y: 20}, {y:0, ease: 'elastic.out(1.4, 0.3)'})
        gsap.fromTo('.open-hand-1', {y:-70, x:80, opacity:0}, {y:0, x:0, rotation: '-120deg', opacity:1, duration:0.45})
    }
})

document.addEventListener("keydown", function(arg){
    if(player1 == true && player2 == false){
    	if(arg.code == "KeyA") {
    		console.log("1:камень")
    		player2 = true;
    		player1 = false;
    		document.querySelector(".blox-status").innerHTML = "Second player's turn"
    		choice_player1 = "Камень"
            cp1.style.backgroundImage = "url('ready.png')";
    	}
    	else if(arg.code == "KeyS") {
    		console.log("1:ножницы")
    		player2 = true;
    		player1 = false;
       		document.querySelector(".blox-status").innerHTML = "Second player's turn"
       		choice_player1 = "Бумага"
            cp1.style.backgroundImage = "url('ready.png')";
    	}
    	else if(arg.code == "KeyD") {
    		console.log("1:бумага")
    		player2 = true;
    		player1 = false;
       		document.querySelector(".blox-status").innerHTML = "Second player's turn"
       		choice_player1 = "Ножницы"
            cp1.style.backgroundImage = "url('ready.png')";
    	}
    }

    if(player2 == true && player1 == false){
    	if(arg.code == "KeyJ") {
    		console.log("2:камень")
    		player2 = false
    		choice_player2 = "Камень"
    		setTimeout(showItems, 1000)
    		setTimeout(Results, 1000)
            cp2.style.backgroundImage = "url('roboready.png')";
    	}
    	else if(arg.code == "KeyK") {
    		console.log("2:ножницы")
    		player2 = false
    		choice_player2 = "Бумага"
    		setTimeout(showItems, 1000)
    		setTimeout(Results, 1000)
            cp2.style.backgroundImage = "url('roboready.png')";
    	}
    	else if(arg.code == "KeyL") {
    		console.log("2:бумага")
    		player2 = false
    		choice_player2 = "Ножницы"
    		setTimeout(showItems, 1000)
    		setTimeout(Results, 1000)
            cp2.style.backgroundImage = "url('roboready.png')";
    	}

    function showItems(){
    	//игрок 1
    	if (choice_player1 == "Камень") {
    		document.querySelector(".open-hand").style.backgroundImage = "url('rock.png')";
    	}
    	if (choice_player1 == "Бумага") {
    		document.querySelector(".open-hand").style.backgroundImage = "url('paper.png')";
    	}
    	if (choice_player1 == "Ножницы") {
    		document.querySelector(".open-hand").style.backgroundImage = "url('scissors.png')";
    	}
    	//игрок 2
    	if (choice_player2 == "Камень") {
    		document.querySelector(".open-hand-1").style.backgroundImage = "url('rock.png')";
    	}
    	if (choice_player2 == "Бумага") {
    		document.querySelector(".open-hand-1").style.backgroundImage = "url('paper.png')";
    	}
    	if (choice_player2 == "Ножницы") {
    		document.querySelector(".open-hand-1").style.backgroundImage = "url('scissors.png')";
    	}
    }

    function Results(){

        gsap.fromTo('.button', {y:-30}, {y:0, opacity:1, ease: 'elastic.out(1.4, 0.3)', duration: 0.5})

    	if (choice_player1 == "Камень" && choice_player2 == "Ножницы") {
    		document.querySelector(".blox-status").innerHTML = "First player won!"
            cp2.style.backgroundImage = "url('robodead.png')";
            gsap.fromTo('.choice-player-2', {x: 20}, {x:0, ease: 'elastic.out(1.4, 0.3)'})

    	}else if (choice_player1 == "Ножницы" && choice_player2 == "Бумага"){
    		document.querySelector(".blox-status").innerHTML = "First player won!"
            cp2.style.backgroundImage = "url('robodead.png')";
            gsap.fromTo('.choice-player-2', {x: 20}, {x:0, ease: 'elastic.out(1.4, 0.3)'})

    	}else if (choice_player1 == "Бумага" && choice_player2 == "Камень"){
    		document.querySelector(".blox-status").innerHTML = "First player won!"
            cp2.style.backgroundImage = "url('robodead.png')";
            gsap.fromTo('.choice-player-2', {x: 20}, {x:0, ease: 'elastic.out(1.4, 0.3)'})

    	}else if (choice_player1 == choice_player2){
    		document.querySelector(".blox-status").innerHTML = "Stalemate!"
            cp1.style.backgroundImage = "url('stalemate.png')";
            cp2.style.backgroundImage = "url('robostalemate.png')";
            gsap.fromTo('.choice-player-1', {x: 0}, {x:-20, rotation: '-6deg', ease: 'elastic.out(1.4, 0.3)'})
            gsap.fromTo('.choice-player-2', {x: 0}, {x:20, rotation: '6deg', ease: 'elastic.out(1.4, 0.3)'})

    	}
    	else {
            document.querySelector(".blox-status").innerHTML = "Second player won!"
            cp1.style.backgroundImage = "url('dead.png')";
            gsap.fromTo('.choice-player-1', {y:0}, {y:30})
    	}
    }
}
})

document.querySelector(".button").onclick = function() {
    alert("hey")
    player1 = true;
    player2 = false;
    choice_player1 = null;
    choice_player2 = null;
    cp1.style.backgroundImage = "url(que.png)"
    cp2.style.backgroundImage = "url(roboque.png)" 
}