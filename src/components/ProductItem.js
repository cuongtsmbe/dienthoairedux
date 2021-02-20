import React, { Component } from 'react'
import {AddcartObj} from './../action/Addcart'
import {connect} from 'react-redux'
class ProductItem extends Component {

    render() {
       var {thongtin}=this.props;

    var tempRating=[];
        for(var i=0;i<thongtin.rating;i++){
            tempRating.push( <li key={i}> <i className="fa fa-star"> </i> </li>)
        }

        return (
            <div>
                <div>
                    <div className="col-lg-9 col-md-6 mb-r">
                        <div className="card text-center card-cascade narrower">
                            <div className="view overlay hm-white-slight z-depth-1">
                                <img src={thongtin.link}
                                    className="img-fluid" alt="" />
                                <a>
                                    <div className="mask waves-light waves-effect waves-light"></div>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <strong>
                                        <a>{thongtin.name}</a>
                                    </strong>
                                </h4>
                                <ul className="rating">
                                  {tempRating}
                                </ul>
                                <p className="card-text">
                                   {thongtin.content}
                                    </p>
                                <div className="card-footer">
                                    <span className="left">{thongtin.price}$</span>
                                    <span className="right">
                                        <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                            <i className="fa fa-shopping-cart" onClick={()=>this.props.Addcart(thongtin)}></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
var mapDispatchToProps=(dispatch)=>{
    return {
        Addcart:(event)=>{
            dispatch(AddcartObj(event))
        }
    }
}
export default connect(null,mapDispatchToProps)(ProductItem);
