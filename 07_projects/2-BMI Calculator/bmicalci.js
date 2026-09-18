const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height == '' || height < 0 || isNaN(height)) {
        console.log("please enter a valid height")
        result.innerHTML = "Please enter a valid height"
        // result.style.color = 'red'
    }

    else if (weight == '' || weight < 0 || isNaN(weight)) {
        console.log("please enter a valid weight")
        result.innerHTML = "Please enter a valid weight"
        // result.style.color = 'red'
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        if (bmi < 18.6) {
            result.innerHTML = `<span>${bmi}</span> You are under weight`
            result.style.backgroundColor = 'red'
        }

        else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `<span>${bmi}</span> You are normal`
            result.style.backgroundColor = 'grey'
        }

        else {
            result.innerHTML = `<span>${bmi}</span> You are over weight`
            result.style.backgroundColor = 'purple'
        }
    }
})