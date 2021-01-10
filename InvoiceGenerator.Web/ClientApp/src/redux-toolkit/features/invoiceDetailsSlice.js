import { createSlice } from '@reduxjs/toolkit'

const invoiceDetailsSlice = createSlice({
    name: 'invoiceDetails',
    initialState: {
        number: "",
        issueDate: new Date().toISOString().substr(0, 10),
        sellingDate: "",
    },
    reducers: {
        setInvoiceDetails(state, action) {
            const { id, text } = action.payload
            state.push({ id, text, completed: false })
        },
        fetchInvoiceHistoryByIdSuccess(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer