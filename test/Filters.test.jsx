import { expect, test, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Filters from "../components/Filters";
import { useRouter } from "next/navigation"
import { getData } from "../actions/getData";

vi.mock('next/navigation')
vi.mock('../actions/getData')

describe('Filters', () => {

    test('Filters should render correctly', async () => {

        render(<Filters />)

        expect(screen.getByRole('heading', {level: 1})).toBeDefined()
        expect(screen.findByRole('form')).toBeDefined()

        // Check fildsets
        expect(screen.getAllByRole('group')).toBeDefined()
        expect(screen.getAllByRole('group')).toHaveLength(3)

        // Check legends
        expect(screen.getByText('Type')).toBeDefined()
        expect(screen.getByText('City')).toBeDefined()
        expect(screen.getByText('Date')).toBeDefined()

        // Check checkboxs
        expect(screen.getAllByRole('checkbox')).toBeDefined()
        expect(screen.getAllByRole('checkbox')).toHaveLength(3)

        // Check select
        expect(screen.getByRole('combobox')).toBeDefined()

        // Check date
        expect(screen.getByRole('date')).toBeDefined()

        // Check buttons
        expect(screen.getByRole('button', {name: /apply filters/i})).toBeDefined()
        expect(screen.getByRole('button', {name: /remove filters/i})).toBeDefined()
    })
})