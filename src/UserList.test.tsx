import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { UserList } from './components/UserList';
import { UserType } from './App';

const renderComponent = () => {
  const users: UserType[] = [
    { name: 'jane', email: 'jane@jane.pl' },
    { name: 'joe', email: 'joe@joe.pl' },
  ];

  render(<UserList users={users} />);
  return {
    users,
  };
};

test('render one row per user', () => {
  renderComponent;

  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const { users } = renderComponent();

  for (const user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
