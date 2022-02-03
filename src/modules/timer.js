const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days')
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')


    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        return {
            timeRemaining, days, hours, minutes, seconds
        }

    }
    
    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerDays.textContent =  ("0" + getTime.days).slice(-2);
        timerHours.textContent = ("0" + getTime.hours).slice(-2);
        timerMinutes.textContent = ("0" + getTime.minutes).slice(-2);
        timerSeconds.textContent = ("0" + getTime.seconds).slice(-2);

        // if(getTime.timeRemaining > 0) {
        //     setTimeout(updateClock, 1000)
        // } 
    }          

    let idInterval  = setInterval(() => {
        let getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
            updateClock()
        } else if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
          }

    }, 1000)

        

}



export default timer