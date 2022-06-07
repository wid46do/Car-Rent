import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import Login from "../pages/Login";
import App from "../App";

let getByTestId;

beforeEach(() => {
    const view = render(<Login/>)

    getByTesrid = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Header render with correct text', () => {
        const headerEl = screen.getByTestId('header')
        expect(headerEl.textContent).toBe('Welcome, Admin BCR')
    })
    test('Button render with correct label', () => {
        const loginEl = screen.getByTestId('login-test')
        expect(loginEl.textContent).toBe('Sign In')
    })
})