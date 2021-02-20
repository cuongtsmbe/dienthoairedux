import React, { Component } from 'react'
import ListcartItem from './ListcartItem'
import TotalPrice from './TotalPrice'
import {connect} from 'react-redux'
class Listcart extends Component {
    render() {
        var {listCartStore}=this.props;
        var ListItem=listCartStore.map((event,index)=>{
            var temp={};
            temp.id=event.id;
            temp.link=event.link;
            temp.name=event.name;
            temp.price=event.price;
            temp.quanlity=event.quanlity;
            return  <ListcartItem key={index} thongtin={temp} />
        });
        return (
            <div>
                <div>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                              {ListItem}
                               <TotalPrice />
                            </tbody>
                        </table>
                    </div>
                </section>
                </div>
            </div>
        );
    }
}
var mapStateToProps=(state)=>{
    return {
        listCartStore:state.listCartStore
    };
};
export default connect(mapStateToProps,null)(Listcart);
