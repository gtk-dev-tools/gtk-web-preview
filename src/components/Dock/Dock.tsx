import React, { SFC } from 'react';

interface Application {
    placeholder: boolean;
    icon: string;
    title?: string;
}

interface ComponentProps {
    applications: Application[];
}

const Dock: SFC<ComponentProps> = ({ applications }) => (
    <div className="hacky-container-for-dock">
        <div id="dashtodockContainer" className="bottom">
            <div id="dash">
                {applications.map(application =>
                    <div className="dash-item-container">
                        {application.placeholder ?
                            <div className="placeholder"></div> :
                            <img src={application.icon} />
                        }
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default Dock;


