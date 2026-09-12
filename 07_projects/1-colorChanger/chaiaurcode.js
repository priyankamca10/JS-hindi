const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (buttons) {          //Go through each button one by one and perform this function.
    console.log(buttons)
    buttons.addEventListener('click', function(e){          //e means event object.
                 //When the user clicks a button, JavaScript creates an event object containing information about that click
        console.log(e);
        console.log(e.target);   //Which HTML element was actually clicked?
        if(e.target.id =='grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id =='white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id =='blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id =='yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id =='purple'){
            body.style.backgroundColor = e.target.id
        }
        
        
    });
});
