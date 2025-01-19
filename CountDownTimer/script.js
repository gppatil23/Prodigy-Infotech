

const startTimer = ()=>{
    const input = document.getElementById('box').value;
    const countdown = document.getElementById('countdown');
    const timerInput = parseInt(input);
    
    countdown.textContent = `Time Left ${timerInput} seconds!`;
    for (let i  = timerInput; i>=0;i--){
        (function (count){
            setTimeout(()=>{
                if(count>0){
                    countdown.textContent = `Time Left: ${count} Seconds`
                }else{
                    countdown.textContent = "Time's UP!"
                }
            }, (timerInput-count) * 1000)
        })(i)
    }

}

document.getElementById('start').addEventListener('click', startTimer)