import type { Action } from "../actions";
import { $,plus } from 'moneysafe';

let id =1;
export type tableRow = {
	
                id: number, // TODO - fix key repetition
                Name: string,
                Quantity: ?number,
                jm: string,
                NettoPrice: ?number,
                NettoValue: ?number,
                Vat: string,
                VatValue: number
}
const initialStateRow:tableRow={
                "id": id, // TODO - fix key repetition
                "Name": "",
                "Quantity": "",
                "jm": "",
                "NettoPrice": "",
                "NettoValue": "",
                "Vat": "23%",
                "VatValue": ""
            }

export type invoiceTableDetails ={
	table: Array,
	NettoValueSum:?number,
	VatValueSum:?number,
	GrossValueSum:?number
}

const initialState:invoiceTableDetails={
	table: [initialStateRow],
	NettoValueSum:0,
	VatValueSum:0,
	GrossValueSum:0
}

export default function invoiceTableDetailsReducer(state: State=initialState, action: Action): State {
    if (action.type === "ADD_ITEM" ) {
       return  Object.assign({}, state, {
        table: state.table.concat([action.obj])
    })}
	else if(action.type === "UPDATE_ITEM"){
	//console.log("Name "+state[0]["Name"] +"val"+ action.val);
	        return state;//{...state, [action.data]: action.val};
   
  }
    else if (action.type === "REMOVE_ITEM") {
let newState = [...state.table];
newState.splice(action.id, 1);
return  Object.assign({}, state, {
        table: newState   
		})
}
else if(action.type === "CALCULATE_TABLE")
{
        let NettoValueSum = $(0);
		let VatValueSum =  $(0);
        let GrossValueSum = $(0);

		let calTable= [...state.table];
        calTable.forEach((x) => {
          NettoValueSum =  $(NettoValueSum).plus(x.NettoValue);
          VatValueSum =  $(VatValueSum).plus(x.VatValue);
          GrossValueSum =  $(GrossValueSum).plus(x.GrossValue);
        });

		if(NettoValueSum.toFixed()==='NaN'){
		NettoValueSum=0;
		}

		if(VatValueSum.toFixed()==='NaN'){
		VatValueSum=0;
		}

		if(GrossValueSum.toFixed()==='NaN'){
		GrossValueSum=0;
		}

        return Object.assign({}, state, {
        NettoValueSum: NettoValueSum.toFixed(2),
		VatValueSum:VatValueSum.toFixed(2),
		GrossValueSum:parseFloat(GrossValueSum).toFixed(2)
      })

}
	else {
    return state;
  }
}