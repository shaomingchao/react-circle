import React, {Component} from "react";
import 'whatwg-fetch';

import Item from "./item";

export default class Dynamic extends Component {
    constructor() {
        super();

        this.state = {
            itemData: []
        }
    }

    componentDidMount() {
        fetch("../public/data/item.json")
            .then(function (response) {
                return response.json()
            })
            .then((json)=> {
                this.setState({"itemData": json.data})
            })
    }

    render() {
        let data = this.state.itemData;
        return (
            <div className="bodyer">
                {
                    data.map((item) => {
                        return [
                            <Item source={item}/>,
                            <div className="body_item_line"/>
                        ]
                    })
                }
            </div>
        )
    }
}