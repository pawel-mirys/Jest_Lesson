import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { UserForm } from './components/UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm onUserAdd={() => {}} />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard('jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.pl');
  await user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.pl' });
});

test('empties the two inputs when form is submitted', () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('jane');
  user.click(emailInput);
  user.keyboard('jane@jane.pl');
  user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
