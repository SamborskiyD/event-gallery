import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Card from '../components/Card';
 
const cardProps = {
    name: 'Concert', 
    uuid: 'dslkajdsa2309023jdls-23oi23jldssd',
    background_image: '',
    date: new Date('2023-12-12').toLocaleString(),
    type: 'CONCERT',
    ticketPrice: '100',
    city: 'Kiev',
}

describe('Card', () => {

    test('Card should render correctly', () => {

        render(<Card />)

        expect(screen.getByRole('img')).toBeDefined()

        expect(screen.getByRole('heading', {level: 1})).toBeDefined()

        expect(screen.getAllByRole('listitem')).toBeDefined()
        expect(screen.getAllByRole('listitem')).toHaveLength(4)

        expect(screen.getByRole('link', {name: /buy ticket/i})).toBeDefined()
    })

    test('Card should render correctly with props', () => {
        render(<Card {...cardProps} />)

        expect(screen.getByRole('img')).toBeDefined()

        expect(screen.getByText(cardProps.name)).toBeDefined()

        expect(screen.getByText('Type: ' + cardProps.type)).toBeDefined()
        expect(screen.getByText('Date: ' + cardProps.date)).toBeDefined()
        expect(screen.getByText('Price: ' + cardProps.ticketPrice + '₴')).toBeDefined()
        expect(screen.getByText('City: ' + cardProps.city)).toBeDefined()

        expect(screen.getByRole('link', {name: /buy ticket/i}).href).toEqual(`http://localhost:3000/events?eventId=${cardProps.uuid}`)
    })
})