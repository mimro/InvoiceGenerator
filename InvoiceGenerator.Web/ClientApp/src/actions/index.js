export type Action = {
    type: string,
    id?: number,
    value?: Object,
    order?: Array<number>,
    discount?: string,
    tax?: string,
    amountPaid?: string,
    paidStatus?: boolean,
    currency?: Object,
    dateFormat?: Object,
    invoiceDetails?: Object,
    status?: Object,
    issueDate?: Date,
    width?: number,
    downloadStatus?: boolean,
    dueDate?: Date,
    name?: string,
    val?:string,
	obj:Object,
	NettoValueSum:?number,
	VatValueSum:?number,
	GrossValueSum:?number,
	previewInvoice:boolean
};

export function setWidth(width: number): Action {
    return {
        type: "SET_WIDTH",
        width
    }
}
	export function setInvoiceDetails(name: string, val: string): Action {
    return {
        type: "SET_INVOICE_DETAILS",
        name,
        val
    }
}
		export function setRecipientDetails(name: string, val: string): Action {
    return {
        type: "SET_RECIPIENT_DETAILS",
        name,
        val
    }
}
		export function setIssuerDetails(name: string, val: string): Action {
    return {
        type: "SET_ISSUER_DETAILS",
        name,
        val
    }}

	export function setInvoiceTable(name: string, val: string): Action {
    return {
        type: "SET_INVOICE_TABLE",
        name,
        val
    }}

	export function addItem(obj: Object): Action {
    return {
        type: "ADD_ITEM",
		obj
    }
}

export function updateItem(id: string,field:string, val: string): Action {
    return {
        type: "UPDATE_ITEM",
        id,
        field,
		val
    }
}

export function removeItem(id: number): Action {
    return {
        type: "REMOVE_ITEM",
        id
    }
	}

export function calculateTable(): Action {
    return {
        type: "CALCULATE_TABLE",
    }
}
	
export function setPreviewInvoice(previewInvoiceFlag:boolean): Action {
    return {
        type: "PREVIEW_INVOICE",
		previewInvoiceFlag
    }
}

export function moveRowUp(rowId:number){
return{
	type: "MOVE_ROW_UP",
	rowId
}
}

export function moveRowDown(rowId:number){
return{
	type: "MOVE_ROW_DOWN",
	rowId
}
}

export function setIsInvoicePaidOff(isInvoicePaidOff:boolean){
return{
	type: "SET_INVOICE_PAID_OFF",
	isInvoicePaidOff
}
}

export function amountInWords(amount: number) {
    return {
        type: "AMOUNT_IN_WORDS",
        amount
    }
}