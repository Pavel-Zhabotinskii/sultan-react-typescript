import {fireEvent, render, screen} from "@testing-library/react"
import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App";

describe('Test router', () => {
    test('go to link', () => {
        render(<Provider store={store}>
                    <MemoryRouter>
                        <App/>
                    </MemoryRouter>
                </Provider>);
        const catalogLink = screen.getByTestId('catalog-link')
        const basketLink = screen.getByTestId('basket-link')

        fireEvent.click(catalogLink)
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
        fireEvent.click(basketLink)
        expect(screen.getByTestId('basket-page')).toBeInTheDocument()
    })

    test('non-existent url', () => {
        render(<Provider store={store}>
                    <MemoryRouter initialEntries={['/jvifwbhviuf']}>
                        <App/>
                    </MemoryRouter>
                </Provider>);
        expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
    })
}) 