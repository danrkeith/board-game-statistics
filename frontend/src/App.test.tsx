import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';

import App from './App';

test('should render navbar with title', () => {
    render(<App />);

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
    expect(within(navbar).getByText('Board Game Statistics')).toBeInTheDocument();
});

test('should render home page by default', () => {
    render(<App />);

    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
    expect(within(header).getByText('Home')).toBeInTheDocument();
});
