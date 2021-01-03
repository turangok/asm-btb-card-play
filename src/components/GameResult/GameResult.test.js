import React from 'react';
import { render } from '@testing-library/react';
import { GameResult } from '.';

describe('<GameResult />', () => {

    test('should render without props (Empty)', () => {
        const dataId = 'gameResultId';
        const { getByTestId } = render(<GameResult />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });

})


