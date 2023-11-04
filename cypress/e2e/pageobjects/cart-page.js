class CartPage {
  get itemName() {
    return ".inventory_item_name";
  }
  verifyItemNameInCart(name) {
    cy.get(this.itemName).should("include.text", name);
  }
}
export default CartPage;
