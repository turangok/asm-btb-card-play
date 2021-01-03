import React from 'react';
import { render } from '@testing-library/react';
import { Card } from '.';

describe('<Card />', () => {

    test('should render without props (Empty)', () => {
        const dataId = 'cardId';
        const { getByTestId } = render(<Card />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });

    test('should have subcomponents', () => {
        const dataId = 'cardId';
        const { getByTestId } = render(<Card />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });
})


