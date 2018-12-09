import React, { SFC } from 'react';
let notification: HTMLDivElement | null;

interface ComponentProps {
    title: string;
    message: string;
    icon: string;
}

const Notification: SFC<ComponentProps> = ({ title, message, icon }) => (
    <div className="notification-banner" ref={el => notification = el}>
        <div>
            <div className="notification-icon">
                <img src={icon} />
            </div>
            <div className="notification-content">
                <p className="message-title">{title}</p>
                <p>{message}</p>
            </div>
            <div className="notification-close" onClick={e => notification && notification.classList.add('closed')}></div>
        </div>
    </div>
);

export default Notification;


