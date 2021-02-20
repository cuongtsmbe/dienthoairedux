import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increase,decrease,del} from './../constant/ConstantsName'
class ItemCart extends Component {

    render() {
        return (
            
                    <tr>
                        <th scope="row">
                            <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                                alt="" className="img-fluid z-depth-0" />
                        </th>
                        <td>
                            <h5>
                                <strong>{this.props.thongtin.name}</strong>
                            </h5>
                        </td>
                        <td>{this.props.thongtin.price}$</td>
                        <td className="center-on-small-only">
                            <span className="qty">{this.props.thongtin.quanlity} </span>
                            <div className="btn-group radio-group" data-toggle="buttons">
                                <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={()=>this.props.Decrease(this.props.thongtin)}>
                                    <a>—</a>
                                </label>
                                <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={()=>this.props.Increase(this.props.thongtin)}>
                                    <a>+</a>
                                </label>
                            </div>
                        </td>
                        <td>{this.props.thongtin.price*this.props.thongtin.quanlity}$</td>
                        <td>
                            <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="Remove item" onClick={()=>{this.props.Delete(this.props.thongtin)}}>
                                X
                                        </button>
                        </td>
                    </tr>
                  
             
        );
    }
}
var mapDispatchToProps=(dispatch)=>{
    return {
        Increase:(event)=>{dispatch({type:increase,thongtin:event})},
        Decrease:(event)=>{dispatch({type:decrease,thongtin:event})},
        Delete:(event)=>{dispatch({type:del,thongtin:event})}
    };
};
export default connect(null,mapDispatchToProps)(ItemCart);
