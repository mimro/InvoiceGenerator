import type { Action } from "../actions";

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
        var NettoValueSum = 0;
		let calTable= [...state.table];
        calTable.forEach((x) => {
            NettoValueSum += x.NettoValue;
        });

        var VatValueSum = 0;
        calTable.forEach((x) => {
            VatValueSum += x.VatValue;
        });

        var GrossValueSum = 0;
        calTable.forEach((x) => {
            GrossValueSum += x.GrossValue;
        });
        return Object.assign({}, state, {
        NettoValueSum: NettoValueSum,
		VatValueSum:VatValueSum,
		GrossValueSum:parseFloat(GrossValueSum)
      })

}
	else {
    return state;
  }
}