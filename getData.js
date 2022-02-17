const btnGenerate = document.getElementById('btn-generate')
const showZone = document.getElementById('show-zone')
const API = 'https://jsonplaceholder.typicode.com/users'

const dataResults = (api) => {
    fetch(api)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        btnGenerate.onclick = function(){
            generateCards(data)
        }
    })
    .catch((error) => {
        console.log(error)
    })
}
const generateCards = (data) => {
    let newCards = ''
    data.forEach((item) => {
        newCards += `<div class="col-sm-6 mt-3 d-flex justify-content-center">
            <div class="main-card">
                <h6 class="text-white mt-3 text-center">My Full Name is: ${item['name']}</h6>
                <p class="text-white text-center">My email is: ${item['email']}</p>
                <p class="text-white text-center">My Street is: ${item['address']['street']}</p>
                <p class="text-white text-center">My Phone is: ${item['phone']}</p>
            </div>
        </div>`
        showZone.innerHTML = newCards
    })
}
dataResults(API)