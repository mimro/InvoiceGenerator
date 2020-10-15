using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class InvoiceData
    {
        public InvoiceSpecificData InvoiceSpecificData { get; set; }

        public IssuerDetailsViewModel IssuerDetails { get; set; }
        
        public RecipentDetailsViewModel RecipentDetails { get; set; }
        
        public IEnumerable<Product> Table { get; set; }
    }
}
