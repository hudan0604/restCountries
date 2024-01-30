import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  test("it should mount", () => {
    render(<Navbar />);

    const navbar = screen.getByTestId("Navbar");

    expect(navbar).toBeInTheDocument();
  });
  test("it should have proper labels inside Navbar", () => {
    render(<Navbar />);

    const title = screen.getByTestId("NavbarTitle").textContent;
    const darkModeLabel = screen.getByTestId("NavbarDarkMode").textContent;

    expect(title).toBe("Where in the world?");
    expect(darkModeLabel).toBe("Dark Mode");
  });
});
