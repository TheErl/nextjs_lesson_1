import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import TodosPage from 'pages/index';
import store from 'utils/store';

import userEvent from '@testing-library/user-event';


describe('Home', () => {
  it('renders a heading', async () => {


    const user = userEvent.setup();

    render(<Provider store={store}> <TodosPage /> </Provider>);

    const todoNameNode = screen.getByLabelText('Todo name');

    await user.type(todoNameNode, 'Test todo name');
    await user.click(screen.getByRole('button', {name: /Add Todo/i}));

    expect(screen.getByText(/Test todo name/i)).toBeInTheDocument();
  });
});
