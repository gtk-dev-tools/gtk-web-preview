import React, { SFC } from 'react';
const today = new Date();
let mins: number|string = today.getMinutes();

if (mins <= 9) {
    mins = `0${mins}`;
}


const PanelCenter: SFC = () =>
    <div id="panelCenter" className="panel-button">
        {today.toDateString().split(`${today.getFullYear()}`)[0]} {today.getHours()}:{mins}
    </div>;

export default PanelCenter;


