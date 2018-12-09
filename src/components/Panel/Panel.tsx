import React, { SFC } from 'react';

const Panel: SFC = (props) => (
    <div id="panel" className='panel maximized'>{props.children}</div>
);

export default Panel;
