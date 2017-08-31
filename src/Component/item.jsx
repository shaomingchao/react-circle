import React,{Component} from "react";

export default class Item extends Component{
    constructor(){
        super();
        this.goDetail=this.goDetail.bind(this);
    }
    goDetail(programId,programName,catalogId) {
        console.log("click");
        // bundle.putString("currentProgramID", item.get("programID"));
        // bundle.putString("program_name", item.get("programName"));
        // bundle.putString("first_catalog_id", item.get("catalogID"));
        // bundle.putInt("episode", 0);
        //INSAPP.programDetail
        if (typeof INSAPP == "object")
        {
            if(INSAPP.hasOwnProperty("programDetail"))
            {
                var json={
                    "programID":programId,
                    "programName":programName,
                    "catalogID":catalogId,
                    "episode":0
                };
                INSAPP.programDetail(JSON.stringify(json));
            }
            else{
                console.log("the programDetail is not function!!!!");
            }
        }
        else{
            console.log("the INSAPP is undefined!!!");
        }
    }

    render(){
        let item=this.props.source;
        return(
            <div className="ph_body_item">
                <div className="ph_body_item_header touch" data-touchFeedback="true">
                    <span className={"ph_body_item_header_face "+item.face}></span>
                    <span className="ph_body_item_header_name">{item.user}</span>
                    <span className="ph_body_item_header_time">刚刚</span>
                </div>
                <div className="ph_body_item_title touch" data-touchFeedback="true"><span>{item.title}</span></div>

                <div className="ph_body_item_img touch"  data-touchFeedback="true">
                    <img src={item.poster.big}/>
                </div>
                <div className="ph_body_item_play touch" data-touchFeedback="true"  onClick={this.goDetail.bind(this,...item.vodArgs)}>
                    <div className="ph_body_item_play_div">
                        <img src={item.poster.small}/>
                        <span className="ph_body_item_playicon"/>
                    </div>
                    <div>
                        <span>{item.movieName}</span>
                        <span>{item.count}</span>
                    </div>
                </div>

                <div className="ph_body_item_ping touch" data-touchFeedback="true">
                    <div><img src="../public/img/zan_cion.png"/><t>{item.zanContent}</t>等{item.zanContent.split("、").length}个赞</div>
                    <div><t>{item.zanComment[0].user}</t>:{item.zanComment[0].comment}</div>
                </div>
                <div className="ph_body_item_footer">
                    <a href="javascript:void(0)" className="ph_body_item_footer_zan">&nbsp;</a>
                    <a href="javascript:void(0)" className="ph_body_item_footer_ping">&nbsp;</a>
                </div>
            </div>
        )
    }
}