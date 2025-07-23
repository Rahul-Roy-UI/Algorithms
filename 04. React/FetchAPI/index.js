// https://onecompiler.com/react/43rhcb8ax
import React from 'react';
import { useEffect, useState } from 'react';

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                return data.json();
            })
            .then(data => {
                setUsers(data)
            });
    }, [])

    return (

        users.map(user => (

            <div key={user.id}>{user.name}</div>

        ))

    )
}

export default App;
