const lightButton = document.getElementById('lightMode')
const darkButton = document.getElementById('darkMode')
const mode = document.getElementById('modeSection')

lightButton.addEventListener('click' , () => {
    mode.classList.add('lightMode')
    lightButton.classList.add('mode__darkButton')
    darkButton.classList.add('mode__darkModeDarkButton')
})

darkButton.addEventListener('click' , () => {
    mode.classList.remove('lightMode')
    lightButton.classList.remove('mode__darkButton')
    darkButton.classList.remove('mode__darkModeDarkButton')
})