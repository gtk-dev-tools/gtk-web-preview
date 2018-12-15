import React, { SFC } from 'react';
import Headerbar from './Headerbar/Headerbar';

interface ComponentProps {
    title: string;
    subtitle?: string;
}

const Window: SFC<ComponentProps> = (props) => (
    <window className="csd solid-csd">
        <Headerbar title={props.title} subtitle={props.subtitle} />
        {/* <decoration>
            <div className="background">
                Hello
            </div>
        </decoration> */}
        <overlay>
            <box name="main_box">
                <paned name="hpaned" className="horizontal">
                    <box name="content_box" className="vertical">
                        <paned name="vpaned" className="vertical">
                            Hello
                        </paned>
                    </box>
                </paned>
            </box>
        </overlay>
    </window>
);

export default Window;
