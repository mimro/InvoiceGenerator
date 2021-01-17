namespace InvoiceGenerator.History.Api.Models
{
    public class InvoiceDataDto
    {
        public int Id { get; set; }
        public string JsonEncodedInvoice { get; set; }
    }
}
