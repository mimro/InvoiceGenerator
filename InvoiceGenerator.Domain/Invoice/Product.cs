namespace InvoiceGenerator.Web.Models.Invoice
{ 
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Quantity { get; set; }

        public string Jm { get; set; }

        public float NettoPrice { get; set; }

        public float NettoValue { get; set; }

        public int Vat { get; set; }

        public float VatValue { get; set; }

        public float GrossValue { get; set; }
    }
}
