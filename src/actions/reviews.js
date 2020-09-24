import cuid from "cuid";

export function addReview(text, restaurantId) {
  return {
    type: "ADD_REVIEW",
    review: { id: cuid(), text: text, restaurantId: restaurantId },
  };
}

export function deleteReview(id) {
  return { type: "DELETE_REVIEW", id: id };
}
