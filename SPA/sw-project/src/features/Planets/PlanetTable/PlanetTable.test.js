import { render, screen } from "@testing-library/react";
import PlanetTable from "./PlanetTable";

describe('Planetes', () => {
    test('display 2 planets', () => {
        render(<PlanetTable></PlanetTable>);

        const table = screen.queryByRole("table");
        console.log(table.rows.length);

        expect(table).toBeInTheDocument(table);
        expect(table.rows.length).toEqual(1);
    })

    test('call fetch', async () => {
        render(<PlanetTable></PlanetTable>);

        const rows = await screen.findAllByRole('row');
        expect(rows).not.toHaveLength(0);
    });
});