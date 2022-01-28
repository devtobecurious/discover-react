import { render, screen } from "@testing-library/react";
import PlanetTable from "./PlanetTable";

test('display 2 planets', () => {
    render(<PlanetTable></PlanetTable>);

    const table = screen.queryByRole("table");
    console.log(table.rows.length);

    expect(table).toBeInTheDocument(table);
    expect(table.rows.length).toEqual(1);
});