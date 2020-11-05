import { createContext } from 'react';

const UserContext = createContext({
    name: '',
    auth: false,
    id: ''   
   
});

export default UserContext;
