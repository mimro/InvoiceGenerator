import type { Action } from "../actions";

export type previewInvoiceFlag = boolean;

export default function previewInvoice(state: previewInvoiceFlag = false, action: Action) {
    if (action.type === "PREVIEW_INVOICE") {
        return action.previewInvoiceFlag;
    }
    return state;
}