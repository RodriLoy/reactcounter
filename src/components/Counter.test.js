import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './Counter'

test('Render Counter', async () => {

    const number = "4"
    
    render(<Counter number={number} />)

    screen.getByText("0");
    screen.getByDisplayValue('4')
 
});

test('Click de button increase', () => {
    const number = "4"
    
    render(<Counter number={number} />) 

    const button = screen.getByText('Increase')
 
    fireEvent.click(button)
    fireEvent.click(button)

    const text = screen.getByText('8')

    expect(text).toBeInTheDocument()
    
});


test('Click de button decrease', () => {
    const number = "8"
    
    render(<Counter number={number} />) 

    const button = screen.getByText('Decrease')
 
    fireEvent.click(button)

    const text = screen.getByText('0')

    expect(text).toBeInTheDocument()
    
});

test('Click de button Increase and decrease', () => {
    const number = "10"
    
    render(<Counter number={number} />) 

    const buttonIncrease = screen.getByText('Increase')
    const buttonDecrease = screen.getByText('Decrease')
 
    fireEvent.click(buttonIncrease)
    fireEvent.click(buttonIncrease)
    fireEvent.click(buttonDecrease)

    const text = screen.getByText('10')

    expect(text).toBeInTheDocument()
    
});