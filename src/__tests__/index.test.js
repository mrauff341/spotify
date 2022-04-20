import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test ("the search button", () => {
    render(<App />);

    const button = screen.getByText("search");

    expect(button).toBeInTheDocument();
});