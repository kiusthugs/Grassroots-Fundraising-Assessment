const container = document.querySelector('.biden_cta-container')
const amountBtn = document.querySelectorAll('.biden_amount-btn')
const donate = document.querySelector('.biden_donate-btn')
let amount

container.addEventListener('click', e => {
    if (e.target.classList.contains('biden_amount-btn')) {
        amountBtn.forEach((amt) => amt.classList.remove('biden_selected-btn'))
        e.target.classList.toggle('biden_selected-btn')
        amount = e.target.id
    }
})

donate.addEventListener('click', () => {
    window.open(`https://secure.actblue.com/donate/web-bfp-march2-2024?refcode=web_test&amount=${amount}`, '_blank')
})