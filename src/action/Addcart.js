
import {addcart} from './../constant/ConstantsName'
var item='';
export var AddcartObj=(event=item)=>{
    return {
        type:addcart,
        thongtin:event
    };
};