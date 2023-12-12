import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe("Header", () => {

    test("Header rendered properly", () => {
        render(<Header />)

        const logo = screen.getByRole('link', {name: /event gallery/i})
        const login = screen.getByRole('link', {name: /log in/i})
        const signup = screen.getByRole('link', {name: /sign up/i})
        const profile = screen.getByRole('link', {name: /profile/i})

        expect(logo).toBeInTheDocument();
        expect(login).toBeInTheDocument();
        expect(signup).toBeInTheDocument();
        expect(profile).toBeInTheDocument();

        expect(logo).toHaveAttribute('href', '/');
        expect(login).toHaveAttribute('href', '/login');
        expect(signup).toHaveAttribute('href', '/signup');
        expect(profile).toHaveAttribute('href', '/profile');
    })

    
})