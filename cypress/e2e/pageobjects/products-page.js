class ShoppingPage {
  // Elements
  get addToCartButton() {
    return "[data-test=add-to-cart-sauce-labs-backpack]";
  }
  get cartBadge() {
    return ".shopping_cart_badge";
  }
  get cartLink() {
    return ".shopping_cart_link";
  }
  get inventoryItems() {
    return ".inventory_item";
  }
  get sortDropdown() {
    return ".product_sort_container";
  }

  get inventoryItems() {
    return ".inventory_item_price";
  }
  get inventoryItemName() {
    return ".inventory_item_name";
  }

  // Methods
  verifyNumberOfInventoryItems(count) {
    cy.get(this.inventoryItems).should("have.length", count);
  }

  clickAddToCart() {
    cy.get(this.addToCartButton).click();
  }

  verifyItemInCartCount(count) {
    cy.get(this.cartBadge).should("have.text", count);
  }

  navigateToCart() {
    cy.get(this.cartLink).click();
  }
  selectHighToLow() {
    cy.get(this.sortDropdown).select("hilo");
  }
  selectZtoA() {
    cy.get(this.sortDropdown).select("za");
  }
  checkSortingHighToLowIsCorrect() {
    cy.get(this.inventoryItems).then(($prices) => {
      const pricesArr = [...$prices].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      const sortedArr = [...pricesArr].sort((a, b) => b - a);
      expect(pricesArr).to.deep.eq(sortedArr);
    });
  }

  checkSortingZtoAIsCorrect() {
    cy.get(this.inventoryItemName).then(($names) => {
      const namesArr = [...$names].map((el) => el.innerText);
      const sortedArr = [...namesArr].sort().reverse();
      expect(namesArr).to.deep.eq(sortedArr);
    });
  }
}

export default ShoppingPage;
