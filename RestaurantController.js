// CONTROLADOR

import {
  RestaurantsManager,
  Dish,
  Category,
  Allergen,
  Menu,
  Restaurant,
  Coordinate,
} from "./Restaurant.js";

// Creamos los Symbol que las usaremos como campos privados
const MODEL = Symbol("RestaurantModel");
const VIEW = Symbol("RestarantView");
const LOAD_RESTAURANT_OBJECTS = Symbol("Load Restaurant Objects");

class RestaurantController {
  constructor(model, view) {
    this[MODEL] = model;
    this[VIEW] = view;
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

    const carne = this[MODEL].createCategory("Carne", "Carne");
    const pescado = this[MODEL].createCategory("Pescado", "Pescado");
    const verduras = this[MODEL].createCategory("Verduras", "Verduras");
    const pasta = this[MODEL].createCategory("Pasta", "Pasta");
    const frutosSecos = this[MODEL].createCategory(
      "Frutos Secos",
      "Frutos secos"
    );

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
  }
}

export { RestaurantController };
