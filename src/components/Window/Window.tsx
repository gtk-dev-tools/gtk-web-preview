import React, { SFC } from 'react';

const Window: SFC = (props) => (
    <window className="csd solid-csd">
        <headerbar className="titlebar default-decoration">
            <div className="title">Hello</div>
            <div className="subtitle">World</div>
        </headerbar>
        <div className="background">
            Hello
        </div>
    </window>
);

export default Window;
