let currunttime = 1500;
let timer ;
let running = false;
let timeDisplay = document.getElementById('time');
function formattime(secondes){
    const min = Math.floor(secondes/60);
    const sec = secondes % 60;
    return `${min}:${sec}`;
}
function updateDisplaytimer(){
    timeDisplay.textContent = formattime(currunttime);
}
const updatestatus = (status) =>{
    document.getElementById('status').textContent = status;
}
const updateTime = () =>{
    if(currunttime > 0){
        currunttime--;
        updateDisplaytimer();
    }
    else{
        clearInterval(timer);
        updatestatus('DONE');
    }
}
function toggletimer(){
    if(running){
        clearInterval(timer);
        updatestatus('PAUSE');
    }else{
        timer= setInterval(updateTime , 1000 );
        updatestatus('RUNNING');
    }
   
    running = !running;
}

document.getElementById('pomodoro').onclick = function(){
    currunttime = 1500 ;
    updateDisplaytimer();
}
document.getElementById('short-break').onclick = function(){
    currunttime = 300 ;
    updateDisplaytimer();
}
document.getElementById('long-break').onclick = function(){
    currunttime = 900 ;
    updateDisplaytimer();
}