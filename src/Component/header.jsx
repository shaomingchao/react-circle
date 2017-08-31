import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Header extends Component {
    constructor(){
       super();
       this.changeMenu=this.changeMenu.bind(this);
    }

    changeMenu(){
        this.props.setObjState({
            activeMenuIndex: parseInt(document.activeElement.getAttribute("data-index"),10)
        })
    }
    render() {
        let activeIndex=this.props.activeIndex;
        return (
            <div className="header">
                <Link to="home" className={activeIndex==0?"slt":""} data-index="0" onClick={this.changeMenu}>动态</Link>
                <Link to="app" className={activeIndex==1?"slt":""} data-index="1" onClick={this.changeMenu}>应用</Link>
            </div>
        )
    }
}