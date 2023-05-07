var sec = 0
var min = 0
var hr = 0
var inteval

var stopwhach = document.getElementById('stopwatch')
var startButton = document.querySelector('.start-btn')

function start() {
    watch();
    inteval = setInterval(watch, 1000)
    startButton.disabled = true;
    startButton.innerHTML = 'Start'
}

function pause() {
    clearInterval(inteval);
    startButton.disabled = false;
    startButton.innerHTML = 'Resume';
}

function stop() {
    sec = 0;
    min = 0;
    hr = 0
    stopwhach.innerHTML =formatTime(hr) + ':' + formatTime(min) + ':' + formatTime(sec);
    clearInterval(inteval)
    startButton.disabled = false;
    startButton.innerHTML = 'Start'
}

function watch() {
    sec++
    if (sec == 60) {
        min++
        sec = 0;
        if(min == 60) {
            min = 0;
            hr++;
        }
    }
    stopwhach.innerHTML =formatTime(hr) + ':' + formatTime(min) + ':' + formatTime(sec);

}
function formatTime(time) {
    return time < 10 ? '0' + time : time
}