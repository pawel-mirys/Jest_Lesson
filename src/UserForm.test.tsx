/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';

import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import { UserForm } from './components/UserForm';
import { UserType } from './App';

test('it shows two inputs and a button', () => {
  render(
    <UserForm
      onUserAdd={function (user: UserType): void {
        throw new Error('Function not implemented.');
      }}
    />
  );

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
