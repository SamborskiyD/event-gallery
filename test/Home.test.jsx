import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Home from "@/app/page"

describe('Home page', () => {
    it("should render", () => {
        render(<Home />)

        const header = screen.getByRole('heading')
        expect(header).toBeInTheDocument()
    })
})