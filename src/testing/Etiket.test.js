import React from "react";
import { render, screen } from "@testing-library/react";
import Etiket from '../pages/Etiket'
import App from "../App";

let getByTestId;

beforeEach(() => {
    const view = render(<App/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Header render with correct text', () => {
        const HeaderEl = screen.getByTestId('header')
        expect(HeaderEl.textContent).toBe('Pembayaran Berhasil!')
    })
})