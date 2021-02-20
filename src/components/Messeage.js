import React, { Component } from 'react'
import {connect} from 'react-redux'
class Messeage extends Component {

    render() {
        return (
            <div>
                <div>
                    <h3>
                        <span className="badge amber darken-2">{this.props.Messeage}</span>
                    </h3>
                </div>
            </div>
        );
    }
}
var mapStateToProps=(state)=>{
    return {
        Messeage:state.Messeage
    }
};
export default connect(mapStateToProps,null)(Messeage);
