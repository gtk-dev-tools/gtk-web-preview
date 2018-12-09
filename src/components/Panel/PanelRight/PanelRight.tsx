import React, { SFC } from 'react';

import Power from '../../../assets/icons/breeze/actions/22/system-shutdown.svg';
import Sound from '../../../assets/icons/breeze/status/22/audio-volume-high.svg';
import Wifi from '../../../assets/icons/breeze/status/22/network-wireless-signal-excellent.svg';

const PanelRight: SFC = () => <div id="panelRight"><img src={Wifi} /><img src={Sound} /><img src={Power} /></div>;

export default PanelRight;

