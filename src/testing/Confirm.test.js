import React from "react";
import { render, screen } from "@testing-library/react";
import Confirm from "../components/Confirm";

let getByTestId;

beforeEach(() => {
    const view = render(<Confirm/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Payment confirmation render with correct text', () => {
        const ConfirmEl = screen.getByTestId('header')
        expect(ConfirmEl.textContent).toBe('Konfirmasi Pembayaran')
    })
    test('Payment proof render with correct text', () => {
        const UploadEl = screen.getByTestId('upload')
        expect(UploadEl.textContent).toBe('Upload Bukti Pembayaran')
    })
    test('Button render with correct text', () => {
        const CardBtnEl = screen.getByTestId('card-button')
        expect(CardBtnEl.textContent).toBe('Upload')
    })
})