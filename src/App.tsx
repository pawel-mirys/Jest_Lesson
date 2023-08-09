import React from 'react';
import { useState } from 'react';
import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';

export type UserType = {
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const onUserAdd = (user: UserType) => {
    setUsers([...users, user]);
  };

  return (
    <>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </>
  );
}

export default App;
