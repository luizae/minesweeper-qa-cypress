describe("first test", () => {
  it("first test", () => {
    cy.visit("https://mines.makecodes.dev/");
    cy.get("#rows").clear().type("20");
    cy.get("#cols").clear().type("20");
    cy.get("#mines").clear().type("10");
    cy.get("button").click();
  });
});
