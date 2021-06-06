(function(){
    'use strict';
    window.addEventListener('DOMContentLoaded', () => {
        sessionStorage.setItem('pizzaInfo', JSON.stringify([]));
    });
    let addToppingButton = document.querySelector('.add-topping');
    let toppingLabel = document.querySelector('[for="toppings"]');
    

    function CreateToppingInput(){
        this.textInput = document.createElement('input');
        this.inputCreate = function () {
            this.textInput.classList.add('toppings');
            this.textInput.setAttribute('type', 'text');
            this.textInput.setAttribute('name', 'toppings');
            this.textInput.setAttribute('placeholder', 'Enter Pizza topping');
            this.textInput.setAttribute('required', '');
            return this.textInput;
          }
    }
    addToppingButton.addEventListener('click', (e) => {
        let newTopping = new CreateToppingInput();
        toppingLabel.append(newTopping.inputCreate());
    })
    
}())