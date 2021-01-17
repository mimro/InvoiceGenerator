namespace InvoiceGenerator.Web.Models.Invoice
{
    using System;
    using System.Collections.Generic;

    public class InvoiceViewModel
    {
        public InvoiceSpecificData InvoiceSpecificData { get; set; }

        public IssuerDetailsViewModel IssuerDetails { get; set; }
        
        public RecipentDetailsViewModel RecipentDetails { get; set; }
        
        public IEnumerable<Product> Table { get; set; }
    }
}
