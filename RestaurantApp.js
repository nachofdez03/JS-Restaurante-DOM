import RestaurantsManager from "./Restaurant.js";
import RestaurantController from "./RestaurantController.js";
import RestaurantView from "./RestaurantView.js";

// Ahora vamos a instanciar un controlador a partir del Modelo y la Vista
const RestaurantApp = new RestaurantController(
  RestaurantsManager.getInstance(),
  new RestaurantView()
);

export default RestaurantApp;
