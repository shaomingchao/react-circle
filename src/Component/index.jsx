import React, {Component, PropTypes} from "react";
import {Route, Switch} from "react-router-dom";

import Header from "./header";
import Dynamic from "./dynamic";
import Appliction from "./appliction";

class Index extends Component {
    constructor() {
        super();

        this.state = {
            activeMenuIndex: 0
        };

        this.setObjState = this.setObjState.bind(this);
    }

    setObjState(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <div className="wrapper">
                <Header setObjState={this.setObjState} activeIndex={this.state.activeMenuIndex}/>
                <Switch>
                    <Route exact path='/' component={Dynamic}/>
                    <Route path='/home' component={Dynamic}/>
                    <Route path="/app" component={Appliction}/>
                </Switch>
            </div>
        )
    }
}

export default Index;
