import React from 'react';

import { useState } from 'react';
import { UserType } from '../App';

type UserFormProps = {
  onUserAdd: (user: UserType) => void;
};

export const UserForm = ({ onUserAdd }: UserFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onUserAdd) {
      onUserAdd({ name, email });
    }
    setEmail('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};
