(function(){
    'use strict';
    let selectTag = document.getElementById('pizza-select');
    let imgDivTag = document.querySelector('.pizza-img');
    const images = [
        {
            id: "pizza",
            pizzaName: "No Image",
            pizza: "pizza",
            img: "IMG/pizza.png"
        },
        {
            id: "hawaii",
            pizzaName: "Hawaii Pizza",
            pizza: "hawaii-pizza",
            img: "IMG/hawaii-pizza.png"
        },
        {
            id: "pepperoni",
            pizzaName: "Pepperoni Pizza",
            pizza: "pepperoni-pizza",
            img: "IMG/pepperoni-pizza.png"
        },
        {
            id: "chilli",
            pizzaName: "Chilli Pizza",
            pizza: "chilli-pizza",
            img: "IMG/chilli-pizza.png"
        },
        {
            id: "mexican",
            pizzaName: "Mexican Pizza",
            pizza: "mexican-pizza",
            img: "IMG/mexican-pizza.png"
        },
        {
            id: "cheese",
            pizzaName: "Cheese Pizza",
            pizza: "cheese-pizza",
            img: "IMG/cheese-pizza.png"
        },
        {
            id: "seafood",
            pizzaName: "Seafood Pizza",
            pizza: "seafood-pizza",
            img: "IMG/seafood-pizza.png"
        },
        {
            id: "chicken",
            pizzaName: "Chicken Pizza",
            pizza: "chicken-pizza",
            img: "IMG/chicken-pizza.png"
        },
    ];



    function OptionCreate(option){
        this.optionName = option.pizzaName;
        this.optionClass = option.pizza;
        this.optionImage = option.img;
        this.optionId = option.id;
        this.inputOption = document.createElement('option');
        this.createOption = function(){
            this.inputOption.setAttribute('value', this.optionImage);
            this.inputOption.innerHTML = this.optionName;
            this.inputOption.classList.add(this.optionClass);
            this.inputOption.id = this.optionId;
            return this.inputOption;
        }
    }

    function ImageCreate(imgValue){
        this.imageTag = document.createElement('img');
        this.imageSrc = imgValue;
        this.createImage = function(){
            this.imageTag.setAttribute('src', this.imageSrc);
            this.imageTag.className = 'pizza-image'
            return this.imageTag;
        }
    }
    
    images.map(image => {
        let optionTag = new OptionCreate(image);
        selectTag.appendChild(optionTag.createOption());
    });
    
   
        let pizzaImage = new ImageCreate('IMG/pizza.png');
        
        imgDivTag.appendChild(pizzaImage.createImage());
        selectTag.addEventListener('change', (e)=>{
            e.preventDefault();
            imgDivTag.innerHTML = null;
            pizzaImage = new ImageCreate(selectTag.value);
            imgDivTag.appendChild(pizzaImage.createImage());
        });
    
    

}())