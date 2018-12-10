import React, { SFC } from 'react';
import Headerbar from './Headerbar/Headerbar';

interface ComponentProps {
    title: string;
    subtitle?: string;
}

const Window: SFC<ComponentProps> = (props) => (
    <window className="csd solid-csd">
        <decoration>
            <Headerbar title={props.title} subtitle={props.subtitle} />
            <div className="background">
                Hello
            </div>
        </decoration>
    </window>
);

export default Window;
