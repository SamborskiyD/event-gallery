import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Ticket from '../components/Ticket';
 
const ticketProps = {
    userFirstName: 'Dmytro', 
    userLastName: 'Samborskyi', 
    uuid: 'dslkajdsa2309023jdls-23oi23jldssd',
    eventDate: '2023-12-12',
    eventCity: 'Kiev',
    eventCityAddress:  '45 Some st.'
}

describe('Ticket', () => {

    test('Ticket should render correctly', () => {

        render(<Ticket />)

        expect(screen.getByRole('img')).toBeDefined()

        expect(screen.getByRole('heading', {level: 1})).toBeDefined()

        expect(screen.getAllByRole('icon')).toBeDefined()
        expect(screen.getAllByRole('icon')).toHaveLength(2)

        expect(screen.getAllByRole('listitem')).toBeDefined()
        expect(screen.getAllByRole('listitem')).toHaveLength(2)
    })

    test('Ticket should render correctly with props', () => {
        render(<Ticket {...ticketProps} />)

        expect(screen.getByRole('img')).toBeDefined()

        expect(screen.getByText(ticketProps.userFirstName + ' ' + ticketProps.userLastName)).toBeDefined()

        expect(screen.getByText(ticketProps.eventCity + ', ' + ticketProps.eventCityAddress)).toBeDefined()
        expect(screen.getByText(new Date(ticketProps.eventDate).toLocaleString())).toBeDefined()
    })
})