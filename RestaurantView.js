// VISTA

// Creamos la clase, declaramos las propiedades que vamos a utilizar más habitualmente
class RestaurantView {
  constructor() {
    this.dishh = document.getElementById("dish");
    this.menu = document.querySelector(".lista.nav__lista"); // Menu de navegacion
    this.categories = document.getElementById("categories");
    this.preMain = document.getElementById("platosRandom");
  }

  // Método para cada vez que se le de al inicio o al logo, se invoqué el método pasado por parmetro
  // prettier-ignore
  bindInit(handler) {
    document.getElementById("inicio").addEventListener("click", (event) => {
      handler();
    });

    document
      .getElementById("logo__image").addEventListener("click", (event) => {
        handler();
      });
  }

  // Iteramos sobre las categorias y las mostramos al inicio
  showCategories(categories) {
    // Si hay mas de un elemento hijo elimina el 2
    if (this.categories.children.length > 1)
      this.categories.children[1].remove();
    // Creamos el div que será dodne iteraremos con las categorias
    const container = document.createElement("div");
    container.id = "category-list";
    container.classList.add("row");

    for (const category of categories) {
      // Vamos insertando las categorias al final
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="category-item"> ><a data-category="${
          category.name
        }" href="#product-list">
      <div><img class="category-image" alt="${category.name}" 
      src="${"./Multimedia/" + category.name + ".jpg"}" />
      </div>
      <div>
      <h3>${category.name}</h3>
      <div>${category.description}</div>
      </div>
      </a>
      </div>`
      );
    }
    this.categories.append(container);
  }

  showCategoriesinMenu(categories) {
    // Creamos el elemento li, que es el que añadiremos al final de la lista
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.classList.add("dropdown"); // Esta clasde de bootstrap conseguira que sea un menu despegable
    li.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle" 
      href="#" id="navCats" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>`
    );
    // Creamos la lista ordenada que irá dentro del elemento li del menu
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    container.id = "lista__categorias";

    // Iteramos sobre las categorias para obtener la informacion que ira en la lista
    for (const category of categories) {
      container.insertAdjacentHTML(
        "beforeend",
        `<li><a data-category="${category.name}"
         class="dropdown-item" href="#product-list">${category.name}</a></li>`
      );
    }
    // Al elemento li que irá en el menu le añadimos las categorias que acabamos de crear
    li.append(container);
    // Y al menu de navegacion le añadimos li que es donde hemos metido todo
    this.menu.append(li);
  }

  // Mostrar alergenos en el menu
  showAllergensinMenu(allergens) {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.classList.add("dropdown"); // Esta clasde de bootstrap conseguira que sea un menu despegable
    li.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle" 
      href="#" id="navAllerg" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">Alergias</a>`
    );
    // Creamos la lista ordenada que irá dentro del elemento li del menu
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    container.id = "lista__allergenens";

    // Iteramos sobre las categorias para obtener la informacion que ira en la lista
    for (const allergen of allergens) {
      container.insertAdjacentHTML(
        "beforeend",
        `<li><a data-allergen="${allergen.name}"
         class="dropdown-item" href="#product-list">${allergen.name}</a></li>`
      );
    }
    // Al elemento li que irá en el menu le añadimos las categorias que acabamos de crear
    li.append(container);
    // Y al menu de navegacion le añadimos li que es donde hemos metido todo
    this.menu.append(li);
  }

  // Mostrar los menus en en menu nav
  showMenusinMenu(menus) {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.classList.add("dropdown"); // Esta clasde de bootstrap conseguira que sea un menu despegable
    li.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle" 
      href="#" id="navMenus" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">Menus</a>`
    );
    // Creamos la lista ordenada que irá dentro del elemento li del menu
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    container.id = "lista__menus";

    // Iteramos sobre las categorias para obtener la informacion que ira en la lista
    for (const menu of menus) {
      container.insertAdjacentHTML(
        "beforeend",
        `<li><a data-menu="${menu.name}"
         class="dropdown-item" href="#product-list">${menu.name}</a></li>`
      );
    }
    // Al elemento li que irá en el menu le añadimos las menus que acabamos de crear
    li.append(container);
    // Y al menu de navegacion le añadimos li que es donde hemos metido todo
    this.menu.append(li);
  }

  showRestaurantsinMenu(restaurants) {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.classList.add("dropdown"); // Esta clasde de bootstrap conseguira que sea un menu despegable
    li.insertAdjacentHTML(
      "beforeend",
      `<a class="nav-link dropdown-toggle" 
      href="#" id="navRest" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">Restaurants</a>`
    );
    // Creamos la lista ordenada que irá dentro del elemento li del menu
    const container = document.createElement("ul");
    container.classList.add("dropdown-menu");
    container.id = "lista__restaurants";

    // Iteramos sobre las categorias para obtener la informacion que ira en la lista
    for (const restaurant of restaurants) {
      container.insertAdjacentHTML(
        "beforeend",
        `<li><a data-restaurant="${restaurant.name}"
         class="dropdown-item" href="#product-list">${restaurant.name}</a></li>`
      );
    }
    // Al elemento li que irá en el menu le añadimos las menus que acabamos de crear
    li.append(container);
    // Y al menu de navegacion le añadimos li que es donde hemos metido todo
    this.menu.append(li);
  }

  RandomDishes(dishes) {
    let copiaDishes = [];
    let platosAleatorios = [];
    let numeroPlatos = 3;

    // Si hay mas de un elemento hijo elimina el 2
    if (this.preMain.children.length > 1) this.preMain.children[1].remove();

    const container = document.createElement("div");
    container.classList.add("flex");

    // Añadimos cada plato a la copia
    for (const dish of dishes) {
      copiaDishes.push(dish);
    }
    for (let index = 0; index < numeroPlatos; index++) {
      let indiceAleatorio = Math.floor(Math.random() * copiaDishes.length);
      platosAleatorios.push(copiaDishes[indiceAleatorio]);

      let plato = copiaDishes[indiceAleatorio];

      container.insertAdjacentHTML(
        "beforeend",
        `<div><a data-dish=${plato.name}><img class="category-image" alt="${
          plato.name
        }" 
        src="${"./Multimedia/" + plato.name + ".jpg"}" />  <div>
        <h3>${plato.name}</h3></a></div></div>`
      );

      //Borramos el plato que hemos seleccionado para que no salga de nuevo
      copiaDishes.splice(indiceAleatorio, 1);
    }
    this.preMain.append(container);
  }

  bindCategoryDishesMenu(handler) {
    // Cogemos el elemento de la lista
    let lista = document.getElementById("navCats");
    const links = lista.nextSibling.querySelectorAll("a");

    // Recorremos cada enlace y le añadimos el evento con el que se activira la callback
    for (const li of links) {
      li.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  bindCategoryDishes(handler) {
    // Cogemos el elemento de la lista
    let lista = document.getElementById("category-list");
    // Cogemos todos los elementos hijos que son los div con clase .category-item
    const links = lista.children;

    // Y ahora recorreremos cada uno de esos elementos y le añadimos un enlace de clickear
    for (const li of links) {
      li.querySelector("a").addEventListener("click", (event) => {
        // Cuando clickea accede a la callback con la categoria del elementoq que hemos pulsado
        handler(event.currentTarget.dataset.category);
      });
    }
  }

  bindAllergenDishesMenu(handle) {
    // Cogemos el elemento de la lista
    let lista = document.getElementById("navAllerg");
    // nextSibling pasamos al siguiente hermano y ahi buscamos los elementos a
    const links = lista.nextSibling.querySelectorAll("a");

    // Recorremos cada enlace y le añadimos el evento con el que se activira la callback
    for (const li of links) {
      li.addEventListener("click", (event) => {
        handle(event.currentTarget.dataset.allergen);
      });
    }
  }

  bindMenuDishesMenu(handler) {
    // Cogemos el elemento de la lista
    let lista = document.getElementById("navMenus");
    const links = lista.nextSibling.querySelectorAll("a");

    // Recorremos cada enlace y le añadimos el evento con el que se activira la callback
    for (const li of links) {
      li.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.menu);
      });
    }
  }

  bindRestaurantsDishesMenu(handler) {
    // Cogemos el elemento de la lista
    let lista = document.getElementById("navRest");
    const links = lista.nextSibling.querySelectorAll("a");

    // Recorremos cada enlace y le añadimos el evento con el que se activira la callback
    for (const li of links) {
      li.addEventListener("click", (event) => {
        handler(event.currentTarget.dataset.restaurant);
      });
    }
  }

  // Mostrar plato cuando se le da a una categoria alérgeno o menu
  showDishes(dishes) {
    this.categories.replaceChildren();

    // Si hay más de un elemento hijo, elimina el segundo
    if (this.categories.children.length > 1) {
      this.categories.children[1].remove();
    }

    const container = document.createElement("div");
    container.id = "dish-list";
    container.classList.add("flex");

    for (const dish of dishes) {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="plate-item">
           <a data-dish="${dish.name}">
            <div><img class="category-image" class="plate-image"  
            src="${"./Multimedia/" + dish.name + ".jpg"}" /></div>
            <div>
              <h3>${dish.name}</h3>
            </div>
          </a>
        </div>`
      );
    }
    this.categories.append(container);
  }

  showRestaurantInformation(restaurant) {
    this.categories.replaceChildren();

    const container = document.createElement("div");
    container.classList.add("flex2");

    container.insertAdjacentHTML(
      "beforeend",
      `<div class = "color">
        <h1> INFORMACION DE ${restaurant.name} </h1> <br>
       <h3> NOMBRE: ${restaurant.name}</h3>
       <h3> ESTILO: ${restaurant.description}</h3>
       <h3> LOCATION: ${restaurant.location}</h3>
     </div>
   </a>
 </div>`
    );
    this.categories.append(container);
  }

  bindShowDish(handle) {
    const div = document.getElementById("dish-list");
    console.log(div);

    // Obtenemos todos los enlaces que son descendientes de los divs hijos del div principal
    const enlaces = div.querySelectorAll("a");
    console.log(enlaces);

    // Iteramos sobre los enlaces
    for (const enlace of enlaces) {
      enlace.addEventListener("click", (event) => {
        // Accedemos al atributo 'data-dish' del enlace y lo pasamos al manejador
        handle(event.currentTarget.dataset.dish);
      });
    }
  }
  dishInformation(dish) {
    this.dishh.replaceChildren();
    this.dishh.insertAdjacentHTML(
      "beforeend",
      `
    <div class="contenedor-externo">
      <div class="izquierda">
        <img src="${
          "./Multimedia/" + dish.name.replace(/\s+/g, "") + ".jpg"
        }" class="fotoplato">
      </div>
      <div class="derecha">
        <p>Nombre: ${dish.name}</p>
        <p>Descripcion: ${dish.description} 2</p>
        <p>Ingredientes${dish.ingredients} 3</p>
      </div>
    </div>
  `
    );
  }

  bindShowRandomDish(handle) {
    const div = document.getElementById("platosRandom");
    const enlaces = div.querySelectorAll("a");

    for (const enlace of enlaces) {
      enlace.addEventListener("click", (event) => {
        handle(event.currentTarget.dataset.dish);
      });
    }
  }
}

export default RestaurantView;
