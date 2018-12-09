import React, { SFC } from 'react';
const today = new Date();

const PanelCenter: SFC = () => <div id="panelCenter">{today.toDateString()} {today.getHours()}:{today.getMinutes()}</div>;

export default PanelCenter;


