namespace InvoiceGenerator.Web.Models.Invoice
{
    using System.Collections.Generic;

    public class Invoice
    {
        public InvoiceSpecificData InvoiceSpecificData { get; set; }

        public IssuerDetailsViewModel IssuerDetails { get; set; }
        
        public RecipentDetailsViewModel RecipentDetails { get; set; }
        
        public IEnumerable<Product> ProductTable { get; set; }
    }
}
