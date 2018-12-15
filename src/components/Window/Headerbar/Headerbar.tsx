import React, { SFC } from 'react';

interface ComponentProps {
    title: string;
    subtitle?: string;
}

const Headerbar: SFC<ComponentProps> = ({ title, subtitle }) => 
    <paned className="horizontal titlebar" name="titlebar_paned">
        <headerbar name="headerbar">
            <box className="vertical">
                <label className="title">{title}</label>
                {subtitle != null && <label className="subtitle">{subtitle}</label>}
            </box>
        </headerbar>
    </paned>;

export default Headerbar;

