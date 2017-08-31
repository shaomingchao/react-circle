import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";

import "./Config/config";
import Index from "./Component/index";
import TouchFeedback from "./lib/touchFeedback";

import "./Style/common";
import "./Style/index";

ReactDOM.render(
    <HashRouter>
        <Index/>
    </HashRouter>,
    document.getElementById('root')
);
new TouchFeedback('.wrapper');