import ProductsPage from "./pageobjects/products-page.js";
import CartPage from "./pageobjects/cart-page.js";

const cartPage = new CartPage();
const productsPage = new ProductsPage();

describe("Test Automation Challenge", () => {
  beforeEach(() => {
    cy.loginStandardUser();
  });

  it("1. Verify the standard user can log in", () => {
    cy.url().should("include", "/inventory.html");
  });

  it("2. Verify you can add an item to the card and that it’s visible on the cart page", () => {
    productsPage.clickAddToCart();
    productsPage.verifyItemInCartCount("1");
    productsPage.navigateToCart();
    cartPage.verifyItemNameInCart("Sauce Labs Backpack");
  });

  it("3. Verify that, by default, the inventory page lists 6 items", () => {
    productsPage.verifyNumberOfInventoryItems(6);
  });

  it("4. Verify you can sort the inventory items by price, high-to-low, and the sorting is correct.", () => {
    productsPage.selectHighToLow();
    productsPage.checkSortingHighToLowIsCorrect();
  });

  it("5. Sort items by name Z-to-A", () => {
    productsPage.selectZtoA();
    productsPage.checkSortingZtoAIsCorrect();
  });
});
