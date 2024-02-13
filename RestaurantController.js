// CONTROLADOR

import {
  Dish,
  Category,
  Allergen,
  Menu,
  Restaurant,
  Coordinate,
} from "./Restaurant.js";

import RestaurantsManager from "./Restaurant.js";

// Creamos los Symbol que las usaremos como campos privados
const MODEL = Symbol("RestaurantModel");
const VIEW = Symbol("RestarantView");
const LOAD_RESTAURANT_OBJECTS = Symbol("Load Restaurant Objects");

class RestaurantController {
  constructor(model, view) {
    this[MODEL] = model; // Instancia de RestaurantManager
    this[VIEW] = view; // Instancia de RestaurantView

    this.onLoad(); // Se invocará cada vez que se inicia la página, por lo que meteremos en el método todo lo que queremos que se inicie
    this.onInit(); // El que ejecuta los métodos de la vista
    this[VIEW].bindInit(this.handleInit); // El Onit de antes para cuando se reinicie, y aqui para cuando se le da
  }

  // Mediante un método de nombre de propiedad computado vamos a crear
  // Un método creado privado para instanciar los objetos
  [LOAD_RESTAURANT_OBJECTS]() {
    const nueces = this[MODEL].createDish("Nueces", "Nueces", ["Nueces"]);
    const boqueron = this[MODEL].createDish("Boqueron", "Boqueron con limon", [
      "Boqueron",
      "limon",
    ]);
    const sardinas = this[MODEL].createDish(
      "Sardinas",
      "Sardinas a la planca",
      ["Sardinas"]
    );
    const macarrones = this[MODEL].createDish(
      "Macarrones",
      "Macarrones con tomate",
      ["Macarrones", "Tomate"]
    );
    const ensalada = this[MODEL].createDish("Ensalada", "Ensalada alineada", [
      "Lechuga",
      "Tomate",
      "Aceite",
      "Vinagre",
    ]);
    const kebab = this[MODEL].createDish("Kebab", "Kebab Mixto", [
      "Pan de pita",
      "Carne de Pollo",
      "Ensalada",
      "Huevo",
    ]);

    const pizza = this[MODEL].createDish("Pizza", "Pizza barbacoa", [
      "Tomate",
      "Carne",
      "huevo",
      "queso",
    ]);

    const lionsRestaurant = this[MODEL].createRestaurant(
      "LionsRestaurant",
      "Restaurant"
    );
    const nachoRestaurant = this[MODEL].createRestaurant(
      "NachoRestaurant",
      "Restaurant"
    );
    const ferniRestaurant = this[MODEL].createRestaurant(
      "FerniRestaurant",
      "Restaurant"
    );

    const carne = this[MODEL].createCategory("Carne", "Carne de vacuno");
    const pescado = this[MODEL].createCategory("Pescado", "Pescado del mar");
    const verduras = this[MODEL].createCategory("Verduras", "Verduras frescas");

    const alergiaHuevo = this[MODEL].createAllergen(
      "Huevo",
      "Alergia al Huevo"
    );
    const alergiaTomate = this[MODEL].createAllergen(
      "Tomate ",
      "Alergia al Tomate"
    );
    const alergiaPescado = this[MODEL].createAllergen(
      "Pescado",
      "Alergia al pescado"
    );
    const alergiaFrutosSecos = this[MODEL].createAllergen(
      "Frutos Secos",
      "Alergia a los frutos secos"
    );

    const menuCarne = this[MODEL].createMenu("Menu Carne", "Menu carnivoro");
    const menuVegetariano = this[MODEL].createMenu(
      "Menu Vegano",
      "Menu para vegetariano"
    );
    const menuDeLaCasa = this[MODEL].createMenu(
      "Menu de la casa",
      "Menu especial"
    );

    // Ahora añadimos las categorias y alergias a los platos, y los platos a los menus

    this[MODEL].assignCategoryToDish(kebab, carne, pescado);
    this[MODEL].assignCategoryToDish(ensalada, verduras, pescado);
    this[MODEL].assignCategoryToDish(boqueron, pescado);
    this[MODEL].assignCategoryToDish(macarrones, verduras, carne);
    this[MODEL].assignCategoryToDish(sardinas, pescado);
    this[MODEL].assignCategoryToDish(pizza, carne);

    this[MODEL].assignAllergenToDish(nueces, alergiaFrutosSecos);
    this[MODEL].assignAllergenToDish(boqueron, alergiaPescado);
    this[MODEL].assignAllergenToDish(kebab, alergiaHuevo);
    this[MODEL].assignAllergenToDish(macarrones, alergiaTomate, alergiaHuevo);
    this[MODEL].assignAllergenToDish(pizza, alergiaTomate, alergiaHuevo);

    this[MODEL].assignDishToMenu(menuCarne, sardinas, boqueron, kebab);
    this[MODEL].assignDishToMenu(menuVegetariano, ensalada, macarrones, nueces);
    this[MODEL].assignDishToMenu(menuDeLaCasa, kebab, pizza);
  }

  // Ahora creamos un método de aplicación que estará en el constructor, se invocará con cada recarga
  onLoad = () => {
    this[LOAD_RESTAURANT_OBJECTS]();
    this.onAddCategory();
  };

  // Ejecutará los métodos de la Vista, se invocará con reinicio de la aplicación o con petición del usuario
  // Evento
  onInit = () => {
    this[VIEW].showCategories(this[MODEL].getterCategories()); // Mostrará las imagenes al cargarse la página
  };

  onAddCategory = () => {
    this[VIEW].showCategoriesinMenu(this[MODEL].getterCategories());
    this[VIEW].RandomDishes(this[MODEL].getterDishes());
  };

  // Manejador
  handleInit = () => {
    this.onInit();
  };
}

export default RestaurantController;
