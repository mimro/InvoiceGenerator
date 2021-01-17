const tableConfig = {
    "properties": [
        { name: "Name", isCalculated: 1 },
        { name: "Quantity", fieldId: 2 },
        { name: "jm", fieldId: 3 },
        { name: "NettoPrice", fieldId: 4 },
        { name: "NettoValue", fieldId: 5 },
        { name: "Vat", fieldId: 6 },
        { name: "VatValue", fieldId: 7 },
        { name: "GrossValue", fieldId: 8 },
    ],
    "headers": [
        "Nazwa",
        "Ilość",
        "J.M",
        "Cena jednostkowa netto",
        "Wartość netto",
        "Vat",
        "Wartość vat",
        "Wartość brutto",
        "Edytuj"
    ]
};

export default tableConfig;