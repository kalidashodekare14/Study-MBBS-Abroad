const formSubmit = document.getElementById('LoadForm')

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone_number = document.getElementById('phone_number').value
    let countries = document.getElementById('countries').value
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const info = {
        name: name,
        email: email,
        phone_number: phone_number,
        countries: countries
    }
    // name validation
    if (name === '') {
        return document.getElementById('nameVlid').innerHTML = 'Name is required'
    } else {
        document.getElementById('nameVlid').innerHTML = ''
    }
    // email validation
    if (!emailPattern.test(email)) {
        return document.getElementById('emailVlid').innerHTML = 'Email is required.'
    } else {
        document.getElementById('emailVlid').innerHTML = ''
    }
    if (isNaN(phone_number) || phone_number === '') {
        return document.getElementById('pnVlid').innerHTML = 'Phone number is required.'
    } else {
        document.getElementById('pnVlid').innerHTML = ''
    }
    if (countries === '') {
        return document.getElementById('countriesVlid').innerHTML = 'Countries is required.'
    } else {
        document.getElementById('countriesVlid').innerHTML = ''
    }
    console.log(info)
    JSAlert.alert("Your ");
})
