import {addcart,BuySuccess,DelSuccess,del,increase,decrease,increaseSuc,decreaseSuc} from './../constant/ConstantsName'
var intialMess= ' '
export var messeageRender=(state=intialMess,action)=>{
    switch(action.type){
        case addcart:
            return BuySuccess;
        case increase:
            return increaseSuc;
        case decrease:
            return decreaseSuc;
        case del:
            return DelSuccess;
        default : 
        return "chua co phan hoi nao!! ";
    }
};