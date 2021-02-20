import React, { Component } from 'react'
import ProductItem from './ProductItem'
import {connect} from 'react-redux'

class Product extends Component {

    render() {
        var {productItemt}=this.props;
        var ItemList=productItemt.map((event,index)=>{
            if(event){
             return <ProductItem  key={index} thongtin={event} />;
             }
             return 1;
        });

        return (
            <div>
                <div>

                    <section className="section">
                        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                        <div className="row">
                       {ItemList}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
var mapStateToProps=(state)=>{
    return {
        productItemt:state.productItemt
    }
};
export default connect(mapStateToProps,null)(Product);
