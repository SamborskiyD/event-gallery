
import { render, screen } from '@testing-library/react'
import Card from '@/components/Card'

describe("Card", () => {

    const props = {
        name: 'Concert',
        id: '4',
        released: 'ddd',
        rating: 'ddd',
    }

    test('Card rendered properly', () => {
        render(<Card />)
    
        const image = screen.getByRole('img');
        const h1 = screen.getByRole('heading', { level: 1} )
        const button = screen.getByRole('link', {name: /buy ticket/i})
        const list = screen.getByRole('list')
        const listItems = screen.getAllByRole('listitem')
    
        expect(image).toBeInTheDocument();
        expect(h1).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(listItems).toHaveLength(3);
        
    })

    test('Card rendered with props', () => {
        render(<Card {...props} />)
        const image = screen.getByRole('img');
        const h1 = screen.getByRole('heading', { level: 1, name: props.name} )
        const button = screen.getByRole('link', {name: /buy ticket/i})
        
        expect(h1).toHaveAccessibleName(props.name)
        expect(button).toHaveAttribute('href', `/events/${props.id}`)
        expect(image).toHaveAttribute('src', '')
    })

})