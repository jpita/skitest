describe("Test Automation Challenge", () => {
  beforeEach(() => {
    cy.loginStandardUser();
  });

  it("1. Verify the standard user can log in", () => {
    cy.url().should("include", "/inventory.html");
  });

  it("2. Verify you can add an item to the card and that it’s visible on the cart page", () => {
    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get(".shopping_cart_link").click();
    cy.get(".inventory_item_name").should(
      "include.text",
      "Sauce Labs Backpack"
    );
  });

  it("3. Verify that, by default, the inventory page lists 6 items", () => {
    cy.get(".inventory_item").should("have.length", 6);
  });

  it("4. Verify you can sort the inventory items by price, high-to-low, and the sorting is correct.", () => {
    cy.get(".product_sort_container").select("hilo");
    cy.get(".inventory_item_price").then(($prices) => {
      const pricesArr = [...$prices].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      const sortedArr = [...pricesArr].sort((a, b) => b - a);
      expect(pricesArr).to.deep.eq(sortedArr);
    });
  });

  it("5. Sort items by name Z-to-A", () => {
    cy.get(".product_sort_container").select("za");
    cy.get(".inventory_item_name").then(($names) => {
      const namesArr = [...$names].map((el) => el.innerText);
      const sortedArr = [...namesArr].sort().reverse();
      expect(namesArr).to.deep.eq(sortedArr);
    });
  });
});
