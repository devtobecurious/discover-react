import {render, screen} from '@testing-library/react'
import PlanetList from './PlanetList';

test('display title Planetes', () => {
    const utils = render(<PlanetList></PlanetList>);

    const result = screen.queryByText('Planetes');  

    expect(result).toBeInTheDocument();
});