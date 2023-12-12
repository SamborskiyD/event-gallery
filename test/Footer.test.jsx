import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'


describe("Footer", () => {

    test('Footer rendered properly', () => {

        render(<Footer />)

        const logo = screen.getByRole('link', {name: /event gallery/i})
        const nav = screen.getByRole('navigation')
        const listItems = screen.getAllByRole('listitem')
        const icons = screen.getAllByRole('link', {name: 'icon'})

        
        expect(nav).toBeInTheDocument()
        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute('href', '/')
        expect(listItems).toHaveLength(3)
        expect(icons).toHaveLength(3)
    })
})