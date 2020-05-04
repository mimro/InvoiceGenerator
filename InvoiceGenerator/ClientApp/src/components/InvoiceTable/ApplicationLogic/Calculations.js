// JavaScript source code

function rowCalculations(data){
        data['NettoValue'] = data['NettoPrice'] * data['Quantity'];
        data['VatValue'] = (data['NettoValue'] * data['Vat'].replace("%", ""))/100;
        data['GrossValue'] = data['NettoValue'] - data['VatValue']
}