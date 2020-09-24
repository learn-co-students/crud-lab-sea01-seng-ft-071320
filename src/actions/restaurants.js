export function addRestaurant(text) {
  return { type: "ADD_RESTAURANT", text: text };
}

export function deleteRestaurant(id) {
  return { type: "DELETE_RESTAURANT", id: id };
}
