// classes //
// account-number
// account-name
// cvc
//account-Mdate
//account-Ydate

const accountNumber = document.querySelector('.account-number')
const accountName = document.querySelector('.account-name')
const accountCVC = document.querySelector('.cvc')
const accountdate = document.querySelector('.account-date')
const error = document.querySelector('.error')
const card_error = document.querySelector('.card-error') 
const MM_error = document.querySelector('.MM-error')
const YY_error = document.querySelector('.YY-error')
const cvc_error = document.querySelector('.cvc-error')

// ids //
// Name
// Number
// MDate
// YDate
// CVC
// btn-Confirm

const input = document.getElementsByTagName('input')

const nameInput = document.getElementById('Name')
const numberInput = document.getElementById('Number')
const MDateInput = document.getElementById('MDate')
const YDateInput = document.getElementById('YDate')
const CVC = document.getElementById('CVC')
const confirmBtn = document.getElementById('btn-Confirm')
const continueBtn = document.getElementById('btn-Continue')
const hidden = document.getElementById('display')
const complete = document.querySelector('.completestate')

function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
}

if(hidden.classList = 'hidden') {
    hidden.classList.toggle("hidden")
}

function showError(errorElement , errorMessage) {
    document.querySelector('.' + errorElement).classList.add("display-error")
    document.querySelector('.' + errorElement).innerHTML = errorMessage
}

function clearError() {
    let errors = document.querySelectorAll('.error')

    for (let error of errors) {
        error.classList.remove('display-error') 
    }
}

numberInput.addEventListener('keyup',  (e) => {
    let val = e.key
    let newVal = ''
    val = val.replace(/\s/g , ' ')
    for (let i = 0; i < val.length; i++) {
        if(i%4 == 0 && i > 0) {
            newVal = newVal.concat(' ')
        }

        newVal = newVal.concat(val[i])
    }

    e.key = newVal
    accountNumber.textContent = numberInput.value

    if( numberInput.value == '') {
        showError('card-error' , 'Cant be blank')
        return false
    } else {
        clearError()
    }

    if(containsAnyLetter(nameInput.value) == true) {
        showError('card-error' , 'Numbers Only')
        return false
    }
})

document.body.addEventListener('keyup', function(e) {
    if(e.target !== MDateInput && e.target !== YDateInput) {
        return 
    }

    if(e.target.size == MDateInput.size && e.target.size == YDateInput.size) {
        let newVal = MDateInput.value + YDateInput.value


        newExp = newVal[0] + newVal[1] + '/' + newVal[2] + newVal[3]

        if(newVal.length == 4) accountdate.textContent = newExp
    }

    if( MDateInput.value == '') {
        showError("MM-error" , 'Cant be blank')
        return false
    } else {
        clearError()
    }

    if( containsAnyLetter(MDateInput.value) == true ) {
        showError("MM-error" , 'Numbers only')
    }

    if( YDateInput.value == '') {
        showError("YY-error" , 'Cant be blank')
        return false
    } else {
        clearError()
    }

    if( containsAnyLetter(YDateInput.value) == true ) {
        showError("YY-error" , 'Numbers only')
    }


})


CVC.addEventListener('keyup', (e) => {
    if(e.target.size == 3) accountCVC.innerHTML = e.target.value

    if(CVC.value == '') {
        showError("cvc-error", "Can't be Blank");
        return false;
    } else {
        clearError()
    }
    
    if(containsAnyLetter(CVC.value) == true){
        showError("cvc-error", "Numbers only");
        return false;
    } else {
        clearError()
    }
})
nameInput.addEventListener('input' , (e) => {
    accountName.textContent = e.target.value

    if(nameInput.value == '') {
        showError("name-error", "Can't be Blank");
        return false;
    } else {
        clearError()
    }
})

confirmBtn.addEventListener('click' , () => {
 
    if( nameInput.value == '' || 
    nameInput.value == '' ||
    MDateInput.value == '' ||
    YDateInput.value == '' ||
    CVC.value == '') {
        alert("Please Fill all fields")
    } else {
        hidden.classList.toggle("hidden")
        complete.classList.toggle('completestate')
    }   
})

continueBtn.addEventListener('click' , (e) => {
    hidden.classList.toggle("hidden")
    complete.classList.toggle('completestate')
})

// numberInput.addEventListener('input' , () => {
//     accountNumber.textContent = numberInput.value
// })

// CVC.addEventListener('input' , () => {
//     accountCVC.textContent = CVC.value
// })

// MDateInput.addEventListener('input' , () => {
//     accountMdate.textContent = MDateInput.value
// })

// YDateInput.addEventListener('input' , () => {
//     accountYdate.textContent = YDateInput.value
// })


