import {render, screen} from "@testing-library/react"
import Header from "../components/Header"
import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";

describe('Test Header', () => {
    test('renders component Header', () => {
        render(<Provider store={store}>
                    <MemoryRouter>
                        <Header/>
                    </MemoryRouter>
                </Provider>);
        const headerConnection = screen.getByText(/На связи в любое время/i)
        const btns = screen.getAllByRole('button')
        expect(headerConnection).toBeInTheDocument()
        expect(btns.length).toBe(3)
    })

})


