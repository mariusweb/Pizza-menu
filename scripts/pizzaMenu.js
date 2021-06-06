(function () {
  "use strict";
  const form = document.querySelector(".input-form");
  const pizzaList = document.querySelector(".pizza-list");
  const sortPizza = document.getElementById('sort');

  let data = JSON.parse(sessionStorage.getItem("pizzaInfo"));

  form.addEventListener("submit", (e) => {
    data = JSON.parse(sessionStorage.getItem("pizzaInfo"));
    addPizza(data);
    sortPizzas(data);
  });

  function CreatePizzaTableItem(pizzaInfo) {
    this.pizzaId = pizzaInfo.id;
    this.pizzaImageSrc = pizzaInfo.image;
    this.pizzaName = pizzaInfo.name;
    this.pizzaToppings = pizzaInfo.toppings.map((topping, index) => {
      switch (pizzaInfo.toppings.length - 1 === index) {
        case false:
          return `${topping}, `;
          break;
        default:
          return topping;
      }
    });
    this.pizzaHeat = pizzaInfo.heat;
    this.pizzaPrice = `${pizzaInfo.price}Eur`;
    this.pizzaTr = document.createElement("tr");
    this.pizzaImage = document.createElement("img");
    
    this.pizzaDelete = document.createElement("button");
    this.divForHeat = document.createElement("div");
    this.createTr = function () {
      this.pizzaTr.id = this.pizzaId;
      return this.pizzaTr;
    };
    this.createTd = function () {
      this.pizzaTd = document.createElement("td");
      return this.pizzaTd;
    };
    this.createImage = function () {
      this.pizzaImage.setAttribute("src", this.pizzaImageSrc);
      this.pizzaImage.setAttribute("alt", this.pizzaImageSrc);
      this.pizzaImage.className = 'pizza-image';
      return this.pizzaImage;
    };
    this.createHeat = function () { 
      

      for(let i = 0; i < this.pizzaHeat; i++){
        this.heatImage = document.createElement("img");
      this.heatImage.setAttribute("src", 'IMG/chilli.png');
      this.heatImage.setAttribute("alt", 'Chilli');
      this.heatImage.className = 'chilli';
        this.divForHeat.appendChild(this.heatImage)
      }
      return this.divForHeat;
    }
    this.createButton = function () {
      this.pizzaDelete.id = `${this.pizzaId}-del`;
      this.pizzaDelete.classList.add("delete");
      this.pizzaDelete.innerText = `Delete`;
      return this.pizzaDelete;
    };
  }

  function addPizza(pizzaData) {
    pizzaList.innerHTML = null;
    pizzaData.map((pizzaItem) => {
      let tableItem = new CreatePizzaTableItem(pizzaItem);
      pizzaList.append(tableItem.createTr());
      let trPizza = document.getElementById(pizzaItem.id);
      addTdAndContent(trPizza, tableItem.createTd(), tableItem.createImage());
      addTdAndContent(trPizza, tableItem.createTd(), tableItem.pizzaName);
      addTdAndContent(trPizza, tableItem.createTd(), tableItem.pizzaToppings);
      addTdAndContent(trPizza, tableItem.createTd(), tableItem.createHeat());
      addTdAndContent(trPizza, tableItem.createTd(), tableItem.pizzaPrice);
      addTdAndContent(trPizza, tableItem.createTd(), tableItem.createButton());
    });
    function addTdAndContent(tr, td, create) {
      tr.append(td);
      switch (Array.isArray(create)) {
        case true:
          tr.lastChild.append(...create);
          break;
        default:
          tr.lastChild.append(create);
      }
    }
    refreshAfterDelete(pizzaData);
    sortPizzas(pizzaData);
  }

  function refreshAfterDelete(dataToRefresh) {
    dataToRefresh.map((pizzaDataDelete) => {
      let deleteButton = document.getElementById(`${pizzaDataDelete.id}-del`);
      deleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (window.confirm("Do you really want to delete order?")) {
          console.log();
          let refreshPizzaData = dataToRefresh.filter((filterPizza) => {
            return filterPizza.id != pizzaDataDelete.id;
          });
          
          addPizza(refreshPizzaData);
          sortPizzas(refreshPizzaData);
        }
      });
    });
  }

  function sortPizzas (pizzaDataSort){
    sortPizza.addEventListener('change', (e) => {
      e.preventDefault();
      switch (sortPizza.value) {
        case 'name':
          pizzaDataSort.sort((a, b) => a.name.localeCompare(b.name));
          addPizza(pizzaDataSort);
          break;
          case 'price':
            pizzaDataSort.sort((a, b) => a.price.localeCompare(b.price));
            addPizza(pizzaDataSort);
          break;
          case 'heat':
            pizzaDataSort.sort((a, b) => a.heat.localeCompare(b.heat));
            addPizza(pizzaDataSort);
          break;
      }
      pizzaDataSort
    })
  }
  
  

})();
