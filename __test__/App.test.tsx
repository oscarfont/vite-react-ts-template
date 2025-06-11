import { render } from "@testing-library/react"
import App from '../src/App';

describe("App component tests suite", () => {
    it("should render correctly", () => {
        render(<App />)
    });
})