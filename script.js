// Created Using Easy HTML v1.4.3
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var score,roundscore,activeplayer, gameplaying,lastdice;
function init(){
score=[0,0];
roundscore=0;
activeplayer=0;
gameplaying=true;
document.getElementById('current-0').textContent = '0';

document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';

document.getElementById('score-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active'); 
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
document.getElementById('name-0').textContent='Player-1';
document.getElementById('name-1').textContent='Player-2';

}
//console.log(dice);
//document.querySelector('#current-'+activeplayer).textContent=dice;
//document.querySelector('#current-'+activeplayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#score-0').textContent;
//console.log(x);
init();
//using this we can hide dice
/*document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';

document.getElementById('current-0').textContent='0';
document.getElementById('score-1').textContent='0';

document.getElementById('current-1').textContent='0';*/

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gameplaying){
//random no.
 var dice1=Math.floor(Math.random()*6)+1;
 var dice2=Math.floor(Math.random()*6)+1;
  //display this
  document.getElementById('dice-1').style.display='block';
  document.getElementById('dice-2').style.display='block';
  
//  var dicedom=document.querySelector('.dice');
 // dicedom.style.display='block';
  document.getElementById('dice-1').src='dice-'+dice1+'.png';
  document.getElementById('dice-2').src='dice-'+dice2+'.png';
//  if player has 2 six in a row he lose his score
  /*if (dice1===6 && lastdice===6) {
    score[activeplayer] = 0;
    document.querySelector('#score-'+activeplayer).textContent = '0';
    nextplayer();
  }*/
  //update final score if rolled no. is not 1
   if (dice1!==1&&dice2!==1){
    roundscore+=dice1+dice2;
    document.querySelector('#current-'+activeplayer).textContent=roundscore;
  }
  
  
  else{
    //next player
    nextplayer();
    
  }
 /* lastdice=dice;
  console.log(lastdice);*/
  }
});
document.querySelector('.btn-hold').addEventListener('click', function (){
 if (gameplaying){
  //add current score to global score
  score[activeplayer]+=roundscore;
  //update the UI
  document.querySelector('#score-'+ activeplayer).textContent=score[activeplayer];
  //if player won game
  var input=document.querySelector('.final-score').value;
  var winningscore;
 // console.log(input);
 if (input){
   winningscore=input;
 }
 else
 winningscore=100;
  if (score[activeplayer]>=winningscore){
  document.querySelector('#name-'+activeplayer).textContent='Winner!';
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display ='none';
  document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
  document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
  gameplaying=false;
  }
  else{
  //next player
  nextplayer();
  }
 }
});
document.querySelector('.btn-new').addEventListener('click', init);

//next player
function nextplayer(){
  activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
  roundscore = 0;
  document.getElementById('current-0').textContent = '0';
  
  document.getElementById('current-1').textContent = '0';
  
  //  document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active'); or
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
}
//new button
