import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
import AuthProvider from '@/components/AuthProvider'

describe("Header", () => {

    test("Header rendered properly", () => {
        render(<Header />)

        const logo = screen.getByRole('link', {name: /event gallery/i})

        expect(logo).toBeInTheDocument();

        expect(logo).toHaveAttribute('href', '/');
    })

    
})