import {render, screen, fireEvent} from "@testing-library/react"
import Counter from "../UI/Counter/Counter"
import { MemoryRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";

describe('Test Counter', () => {
    let n = 1
    const clickBtn = () => n += 1
    const clickBtnMinus = () => n -= 1

    test('renders component Counter', () => {
        render(<Provider store={store}>
                    <MemoryRouter>
                        <Counter id="" number={n} clickBtn={clickBtn} clickBtnMinus={clickBtnMinus}/>
                    </MemoryRouter>
                </Provider>);
        const btnMinus = screen.getByTestId('btn-minus')
        const btnAdd = screen.getByTestId('btn-add')

        expect(screen.getByText(1)).toBeInTheDocument()
        fireEvent.click(btnAdd)
        expect(screen.getByText(2)).toBeInTheDocument()
        fireEvent.click(btnMinus)
        expect(screen.getByText(1)).toBeInTheDocument()
    })
})
