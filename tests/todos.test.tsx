import { render, screen } from '@testing-library/react';
import TodosPage from 'pages/todos';

describe('Todos', () => {
  it('renders a heading', () => {
    render(<TodosPage />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
