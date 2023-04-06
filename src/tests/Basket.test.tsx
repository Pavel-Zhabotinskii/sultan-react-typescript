import {render, screen} from "@testing-library/react"
import Basket from "../components/Basket"
import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";

test('renders component Basket', () => {
    render(<Provider store={store}>
                <MemoryRouter>
                    <Basket classes=""/>
                </MemoryRouter>
            </Provider>);
    const adress = screen.getByText(/Корзина/i)
    expect(adress).toBeInTheDocument()
})
