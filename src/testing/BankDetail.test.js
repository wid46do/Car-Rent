import React from "react";
import { render, screen } from "@testing-library/react";
import BankDetail from "../pages/BankDetail";
import App from "../App";

let getByTestId;

beforeEach(() => {
    const view = render(<App/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Deadline render with correct text', () => {
        const DeadlineEl = screen.getByTestId('dl-header')
        expect(DeadlineEl.textContent).toBe('Selesaikan Pembayaran Sebelum')
    })
})