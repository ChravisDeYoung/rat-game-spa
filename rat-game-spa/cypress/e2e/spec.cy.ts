import { theme } from "../../tailwind.config.cjs";

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : null;
};

describe("Basic Workflows", () => {
  it("displays and deletes highscore", () => {
    cy.visit("/", {
      onBeforeLoad: () => window.localStorage.setItem("highscore", "7"),
    });

    cy.getBySel("highscore").should("have.text", "7");

    cy.getBySel("settings-link").click();

    cy.url().should("include", "/settings");

    cy.getBySel("reset-btn").click();

    cy.getBySel("reset-highscore").should("have.text", "7");

    cy.getBySel("confirm-reset-btn").click();
    cy.getBySel("home-link").click();

    cy.url().should("not.include", "/settings");
    cy.getBySel("highscore").should("have.text", "0");
  });

  it("navigates through the how to workflow", () => {
    cy.visit("/");

    cy.getBySel("how-to-link").click();

    // page 1
    cy.url().should("include", "/how-to");
    cy.getBySel("home-link").should("not.exist");
    cy.getBySel("next-link").should("exist").click();

    // page 2
    cy.getBySel("home-link").should("not.exist");
    cy.getBySel("next-link").should("exist").click();

    // page 3`
    cy.getBySel("home-link").should("not.exist");
    cy.getBySel("next-link").should("exist").click();

    // page 4
    cy.getBySel("left-ear")
      .should("have.css", "background-color")
      .and("eq", hexToRgb(theme.colors["difficulty-very-easy"]));
    cy.getBySel("right-ear")
      .should("have.css", "background-color")
      .and("eq", hexToRgb(theme.colors["difficulty-very-easy"]));

    cy.getBySel("difficulty-hard-btn").click();
    cy.getBySel("left-ear")
      .should("have.css", "background-color")
      .and("eq", hexToRgb(theme.colors["difficulty-hard"]));
    cy.getBySel("right-ear")
      .should("have.css", "background-color")
      .and("eq", hexToRgb(theme.colors["difficulty-hard"]));

    cy.getBySel("next-link").should("not.exist");
    cy.getBySel("home-link").should("exist").click();

    cy.url().should("not.include", "/how-to");
  });
});
