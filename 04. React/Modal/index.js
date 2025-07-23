// https://onecompiler.com/react/43rhcxuvk

import React from 'react';
import { useState } from 'react'

function App() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Open Modal</button>
            {open && (
                <div style={{ position: 'fixed', background: '#00000088', inset: 0 }}>
                    <div style={{ background: '#fff', padding: '1rem', margin: '10% auto', width: '300px' }}>
                        <h4>Modal Content</h4>
                        <button onClick={() => setOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;