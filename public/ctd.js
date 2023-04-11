const daysdis = document.getElementById('daysdis')
const hoursdis = document.getElementById('hoursdis')
const minsdis = document.getElementById('minsdis')
const secondsdis = document.getElementById('secondsdis')



const election = '5 Nov 2024';
function countdown() {
    const currentDate = new Date()
    const electionDate = new Date(election)

    const totalseconds = (electionDate - currentDate) / 1000   //so the reason why i divided it by 1000 ,it's because it will give you the answer in milliseconds
    const days = Math.floor(totalseconds / 3600 / 24)
    const hours = Math.floor(totalseconds / 3600) % 24
    const minutes = Math.floor(totalseconds / 60) % 60
    const seconds = Math.floor(totalseconds) % 60
    if (seconds < 10) {
        0
    }

    daysdis.innerHTML = days
    hoursdis.innerHTML = hours
    minsdis.innerHTML = minutes
    secondsdis.innerHTML = seconds
}
countdown()
setInterval(countdown, 1000)
