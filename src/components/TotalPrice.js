import React, { Component } from 'react'
import {connect} from 'react-redux'
class TotalPrice extends Component {

    render() {
        var {listCartStore}=this.props;
        var SumTotal=0;
        listCartStore.forEach(event=>SumTotal=SumTotal+event.price*event.quanlity);
        return (
                <tr>
                        <td colSpan="3"></td>
                        <td>
                            <h4>
                                <strong>Tổng Tiền</strong>
                            </h4>
                        </td>
                        <td>
                            <h4>
                                <strong>{SumTotal}$</strong>
                            </h4>
                        </td>
                        <td colSpan="3">
                            <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                            </button>
                        </td>
                    </tr>

        );
    }
}
var mapStateToProps=(state)=>{
    return {
        listCartStore:state.listCartStore
    };
};
export default connect(mapStateToProps,null)(TotalPrice);
