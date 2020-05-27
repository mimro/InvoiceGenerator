import type { Action } from "../actions";
import { $,plus } from 'moneysafe';
import { calculateRow, calculateSummaryTable } from "../ApplicationLogic/Calculations"
import { AmountInWords } from "../ApplicationLogic/AmountInWords"

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
                "NettoPrice":"",
                "NettoValue": 0,
                "Vat": "23",
                "VatValue": 0,
				"GrossValue":0
            }
const newRow:tableRow=(id)=>{
	        return{  
				"id": id, 
                "Name": "",
                "Quantity": "",
                "jm": "",
                "NettoPrice": "",
                "NettoValue": 0,
                "Vat": "23",
                "VatValue": 0,
				"GrossValue":0
				}
}

export type invoiceTableDetails ={
	table: Array,
	NettoValueSum:?number,
	VatValueSum:?number,
	GrossValueSum: ?number,
	AmountInWords: string,
	payedOff:boolean
}

const initialState:invoiceTableDetails={
	table: [initialStateRow],
	NettoValueSum:0,
	VatValueSum:0,
	GrossValueSum: 0,
	AmountInWords: "",
	payedOff:true
}

export default function invoiceTableDetailsReducer(state: State = initialState, action: Action): State {
	if (action.type === "ADD_ITEM") {
		return Object.assign({}, state, {
			table: state.table.concat([newRow(state.table.length + 1)])
		})
	}
	else if (action.type === "UPDATE_ITEM") {

		let newState = [...state.table];
		let { id, field, val } = action;
		let summaryValues = { NettoValueSum: 0, VatValueSum: 0, GrossValueSum: 0 };



		newState[id][field] = val;
		if (field === 'Quantity' || field === 'NettoPrice' || field === 'Vat') {
			let calcResult = calculateRow(newState[id].NettoPrice, newState[id].Quantity, newState[id].Vat);
			newState[id].GrossValue = calcResult.GrossValue;
			newState[id].VatValue = calcResult.VatValue;
			newState[id].NettoValue = calcResult.NettoValue;
			summaryValues = calculateSummaryTable(newState);


			let amountInWords = AmountInWords(summaryValues.NettoValueSum);

			return Object.assign({}, state, {
				table: newState,
				NettoValueSum: summaryValues.NettoValueSum.toFixed(2),
				VatValueSum: summaryValues.VatValueSum.toFixed(2),
				GrossValueSum: summaryValues.GrossValueSum.toFixed(2),
				AmountInWords: amountInWords
			});
		}
		else {
			return Object.assign({}, state, {
				table: newState,
			})
		}

	}
	else if (action.type === "REMOVE_ITEM") {
		let newState = [...state.table];
		newState.splice(action.id, 1);
		let summaryValues = calculateSummaryTable(newState);
		let normalized = normalizeIndexes(newState);
		return Object.assign({}, state, {
			table: normalized,
			NettoValueSum: summaryValues.NettoValueSum.toFixed(2),
			VatValueSum: summaryValues.VatValueSum.toFixed(2),
			GrossValueSum: summaryValues.GrossValueSum.toFixed(2)
		})
	}
	else if (action.type === "CALCULATE_TABLE") {
		let NettoValueSum = $(0);
		let VatValueSum = $(0);
		let GrossValueSum = $(0);

		let calTable = [...state.table];
		calTable.forEach((x) => {
			NettoValueSum = $(NettoValueSum).plus(x.NettoValue);
			VatValueSum = $(VatValueSum).plus(x.VatValue);
			GrossValueSum = $(GrossValueSum).plus(x.GrossValue);
		});

		if (NettoValueSum.toFixed() === 'NaN') {
			NettoValueSum = 0;
		}

		if (VatValueSum.toFixed() === 'NaN') {
			VatValueSum = 0;
		}

		if (GrossValueSum.toFixed() === 'NaN') {
			GrossValueSum = 0;
		}

		return Object.assign({}, state, {
			NettoValueSum: NettoValueSum.toFixed(2),
			VatValueSum: VatValueSum.toFixed(2),
			GrossValueSum: parseFloat(GrossValueSum).toFixed(2)
		})

	}
	else if (action.type === "MOVE_ROW_UP") {
		let newTable = [...state.table];
		if (action.rowId !== -1 && action.rowId !== 0) {
			let index = action.rowId;
			let f = newTable.splice(index, 1)[0];
			newTable.splice(index - 1, 0, f);

			return Object.assign({}, state, {
				table: newTable,
			})
		}
		return state;
	}
	else if (action.type === "MOVE_ROW_DOWN") {
		let newTable = [...state.table];

		if (action.rowId !== -1 && action.rowId !== newTable.length) {
			let index = action.rowId;
			let f = newTable.splice(index, 1)[0];
			newTable.splice(index + 1, 0, f);

			return Object.assign({}, state, {
				table: newTable
			});

		}
		return state;
	}
	else if (action.type === "AMOUNT_IN_WORDS") {
		let aiw = AmountInWords(state.GrossValueSum);
		return Object.assign({}, state, {
			AmountInWords: aiw
		});
	}
	else {
		return state;
    }
}

function normalizeIndexes(table)
{
 table.forEach((o, i) => o.id = i +1 );
return table;
}