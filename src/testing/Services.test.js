import React from "react";
import { render, screen } from "@testing-library/react";
import Services from "../components/Services";

let getByTestId;

beforeEach(() => {
    const view = render(<Services/>)

    getByTestId = view.getByTestId;
})

describe("UI Test", ()=>{
    test('Header render with correct text', () => {
        const HeaderEl = screen.getByTestId('header')
        expect(HeaderEl.textContent).toBe('Best Car Rental for any kind of trip in (Lokasimu)!')
    })
    test('Description render with correct text', () => {
        const DescriptionEl = screen.getByTestId('desc')
        expect(DescriptionEl.textContent).toBe('Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.')
    })
})