import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import CardPayment from '../components/CardPayment'

let getByTestId;

beforeEach(() => {
    const view = render(<CardPayment/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Card header 1 render with correct text', () => {
        const header1El = screen.getByTestId('header1')
        expect(header1El.textContent).toBe('Nama/Tipe Mobil')
    })
    test('Card header 2 render with correct text', () => {
        const header2El = screen.getByTestId('header2')
        expect(header2El.textContent).toBe('Harga')
    })
    test('Card header 3 render with correct text', () => {
        const header3El = screen.getByTestId('header3')
        expect(header3El.textContent).toBe('Biaya Lainya')
    })
    test('Card header 4 render with correct text', () => {
        const header4El = screen.getByTestId('header4')
        expect(header4El.textContent).toBe('Belum Termasuk')
    })
    test('Card header 5 render with correct text', () => {
        const header5El = screen.getByTestId('header5')
        expect(header5El.textContent).toBe('Total')
    })
    test('Button render with correct text', () => {
        const ButtonEl = screen.getByTestId('payment-method')
        expect(ButtonEl.textContent).toBe('Bayar')
    })
})