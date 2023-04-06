import {render, screen} from "@testing-library/react"
import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App";

describe('Test Header', () => {
    test('renders component Header', () => {
        render(<Provider store={store}>
                    <MemoryRouter>
                        <App/>
                    </MemoryRouter>
                </Provider>);
        const headerConnections = screen.getAllByText(/На связи в любое время/i)
        const footerText = screen.getByText(/Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области/i)
        const mainText = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./i)
        expect(headerConnections.length).toBe(2)
        expect(footerText).toBeInTheDocument()
        expect(mainText).toBeInTheDocument()
    })

})