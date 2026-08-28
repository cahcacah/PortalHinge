// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PortalHinge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PortalHinge/i);
    expect(titleElement).toBeInTheDocument();
});
