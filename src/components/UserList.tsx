import React from 'react';

import { UserType } from '../App';

type UserListProps = {
  users: UserType[];
};

export const UserList = ({ users }: UserListProps) => {
  const renderUsers = users.map((user) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid='users'>{renderUsers}</tbody>
    </table>
  );
};
