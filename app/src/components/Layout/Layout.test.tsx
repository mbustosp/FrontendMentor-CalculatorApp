import { render, screen } from "@testing-library/react"
import {WithComponents} from "./Layout.stories";

it("renders without crashing", () => {
    render(<WithComponents />);
})

it("renders Top component", async () => {
    render(<WithComponents />);
    const matches = await screen.findAllByText(/Top/i);
    expect(matches).toHaveLength(1);
})

it("renders Screen component", async () => {
    render(<WithComponents />);
    const matches = await screen.findAllByText(/Screen/i);
    expect(matches).toHaveLength(1);
})

it("renders Keyboard component", async () => {
    render(<WithComponents />);
    const matches = await screen.findAllByText(/Keyboard/i);
    expect(matches).toHaveLength(1);
})