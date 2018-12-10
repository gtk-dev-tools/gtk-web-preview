import React, { SFC } from 'react';

interface ComponentProps {
    title: string;
    subtitle?: string;
}

const Headerbar: SFC<ComponentProps> = ({ title, subtitle }) => 
    <headerbar className="titlebar default-decoration">
        <div className="title">{title}</div>
        {subtitle != null && <div className="subtitle">{subtitle}</div>}
    </headerbar>;

export default Headerbar;

