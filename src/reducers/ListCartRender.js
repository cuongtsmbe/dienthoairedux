
import {addcart,increase,decrease,del} from './../constant/ConstantsName'
var ItemCart = [];
export var listCartStore = (state=ItemCart, action) => {
    switch (action.type) {
        case addcart:
            var temp={};
            var tang=0;
            temp.id=action.thongtin.id;
            temp.link=action.thongtin.link;
            temp.name=action.thongtin.name;
            temp.price=action.thongtin.price;
            temp.quanlity=1;
            var arrayT=state.map((event)=>{
                if(event.id===temp.id){
                    event.quanlity++;
                    tang=1;
                }
                return event;
            });
           if(tang===0){
             arrayT.push(temp);
            }
            return arrayT;
        case increase:
            var arrayTT=state.map((event)=>{
                if(event.id===action.thongtin.id){
                    event.quanlity++;
                }
                return event;
            });
            return arrayTT;
        case decrease:   
            var arrayG=state.map((event)=>{
                if(event.id===action.thongtin.id && event.quanlity > 1){
                    event.quanlity--;
                }
                return event;
            });
            return arrayG;
        case del:
            var arrayDel=state.filter((event)=>{
               if(event.id!=action.thongtin.id){
                    return event;
               }
            });
            return arrayDel;
        default:
            return state;
    }
};