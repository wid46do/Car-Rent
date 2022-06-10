import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import NavbarHome from "../components/NavbarHome";
import App from "../App";

let getByTestId;

beforeEach(() => {
    const view = render(<App/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Button render with correct text', () => {
        const SignInEl = screen.getByTestId('signIn')
        expect(SignInEl.textContent).toBe('SignIn')
    })
})