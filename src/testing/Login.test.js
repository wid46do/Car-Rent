import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("pastikan ada Form Registrasi", () => {
    //Testing should be here
    test("pastikan ada kolom email", () => {
        const component = render( < App / > );
        console.log(component, "method yang tersedia untuk testing");
        const inputEmail = component.getByText("Email:");
        expect(inputEmail).toBeInTheDocument();
    })

    {
        /* test("validasi struktur email yang ditulis harus benar", () => {
                const text = "test@gmail.com";
                expect(validateInput(text)).toBe(true);
            })

            test("validasi struktur email yang salah", () => {
                const text = "testgmail.com";
                expect(validateInput(text)).toBe(false);
            })  */
    }

    test("pastikan ada label password", () => {
        const component = render( < App / > );
        const inputPassword = component.getByText("Password:");
        expect(inputPassword).toBeInTheDocument();
    })
})