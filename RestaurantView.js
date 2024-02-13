// VISTA

// Creamos la clase, declaramos las propiedades que vamos a utilizar más habitualmente
class RestaurantView {
  constructor() {
    this.main = document.getElementById("main"); // Main
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
        `<div><a href=''><img class="category-image" alt="${plato.name}" 
        src="${"./Multimedia/" + plato.name + ".jpg"}" />  <div>
        <h3>${plato.name}</h3></a></div></div>`
      );

      //Borramos el plato que hemos seleccionado para que no salga de nuevo
      copiaDishes.splice(indiceAleatorio, 1);
    }
    this.preMain.append(container);
  }
}

export default RestaurantView;
