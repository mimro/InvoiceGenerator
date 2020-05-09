import type { Action } from "../actions";

export type isPreviewEnabled = boolean;

const initialState: isPreviewEnabled = true; 

export default function previewInvoice(state: isPreviewEnabled = false, action: Action) {
    if (action.type === "PREVIEW_INVOICE") {
        return action.previewInvoice;
    }
    return state;
}