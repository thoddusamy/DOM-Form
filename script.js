formSubmit.addEventListener('click', (page) => {
  let fnameData = document.getElementById('firstname-txt').value

  let lnameData = document.getElementById('lastname-txt').value

  let addressData = document.getElementById('address-txt').value

  let pincodeData = document.getElementById('pincode-txt').value

  let genderData = document.getElementsByName('gender')

  let foodData = document.getElementsByName('foods')

  let stateData = document.getElementById('state-txt').value

  let countryData = document.getElementById('country-txt').value

  // -------------------  getting gender value  ----------------------------

  let genderValue = ''

  genderData.forEach((gen) => {
    if (gen.checked) {
      genderValue = gen.value
    }
  })

  // --------------------  getting data food values  ------------------------

  let foodOfArray = []

  foodData.forEach((foodlist) => {
    if (foodlist.checked) {
      foodOfArray.push(foodlist.value)
    }
  })

  if (foodOfArray.length < 2) {
    alert('Please Select Aleast minimum 2 Food option')
  }

  // ------------------  creating tablebody elements  ------------------------

  let tr = document.createElement('tr')

  let td1 = document.createElement('td')
  td1.innerText = fnameData

  let td2 = document.createElement('td')
  td2.innerText = lnameData

  let td3 = document.createElement('td')
  td3.innerText = addressData

  let td4 = document.createElement('td')
  td4.innerText = pincodeData

  let td5 = document.createElement('td')
  td5.innerText = genderValue

  let td6 = document.createElement('td')
  td6.innerText = foodOfArray

  let td7 = document.createElement('td')
  td7.innerText = stateData

  let td8 = document.createElement('td')
  td8.innerText = countryData

  let tablebody = document.getElementById('table-body')

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
  tablebody.append(tr)

  // --------------------  clearing input fields datas  ----------------------

  let fnameData1 = (document.getElementById('firstname-txt').value = '')

  let lnameData1 = (document.getElementById('lastname-txt').value = '')

  let addressData1 = (document.getElementById('address-txt').value = '')

  let pincodeData1 = (document.getElementById('pincode-txt').value = '')

  let stateData1 = (document.getElementById('state-txt').value = '')

  let countryData1 = (document.getElementById('country-txt').value = '')

  let uncheck1 = document.querySelector('#chicken')
  uncheck1.checked = false

  let uncheck2 = document.querySelector('#mutton')
  uncheck2.checked = false

  let uncheck3 = document.querySelector('#fish')
  uncheck3.checked = false

  let uncheck4 = document.querySelector('#pizza')
  uncheck4.checked = false

  let uncheck5 = document.querySelector('#burger')
  uncheck5.checked = false

  let radio1 = document.querySelector('#gender-male')
  radio1.checked = false

  let radio2 = document.querySelector('#gender-female')
  radio2.checked = false

  let radio3 = document.querySelector('#gender-other')
  radio3.checked = false

  page.preventDefault()
})
