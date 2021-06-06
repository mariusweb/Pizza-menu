(function(){
    'use strict';
    const form = document.querySelector('.input-form');
    const pizzaName = document.querySelector('.name');
    const pizzaPrice = document.querySelector('.price');
    const pizzaHeat = document.querySelector('.heat');
    const pizzaImage = document.getElementById('pizza-select');
    let toppingLabel = document.querySelector('[for="toppings"]');

    let newId = () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }


    form.addEventListener('submit', (e) => {
        const pizzaToppings = document.querySelectorAll('.toppings');
        let data = JSON.parse(sessionStorage.getItem('pizzaInfo'));
        e.preventDefault();
        let toppingsArray = [];
        pizzaToppings.forEach(topping =>{
            toppingsArray.push(topping.value);
        })
        let pizzaInfo = {
            id: newId(),
            name: pizzaName.value,
            price: pizzaPrice.value,
            heat: pizzaHeat.value,
            toppings: toppingsArray,
            image: pizzaImage.value
        };
        data.push(pizzaInfo);
        sessionStorage.setItem('pizzaInfo', JSON.stringify(data));
        pizzaName.value = '';
        pizzaPrice.value = '';
        pizzaHeat.value = '';
        pizzaToppings.forEach(topping =>{
            topping.value = '';
        })
        pizzaImage.value = 'IMG/pizza.png';
        let allToppings = document.querySelectorAll('.toppings');
        toppingLabel.innerHTML = null;
        toppingLabel.innerText = 'Toppings: ';
        allToppings.forEach((toppingInput, index) => {
            if(index < 2){
                toppingLabel.append(toppingInput);
            }
        })
        

    })
}())