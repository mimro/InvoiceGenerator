using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class InvoiceDto
    {
        public InvoiceSpecificDataDto InvoiceSpecificData { get; set; }

        public IssuerDetailsDto IssuerDetails { get; set; }
        
        public RecipentDetailsDto RecipentDetails { get; set; }
        
        public IEnumerable<ProductDto> Table { get; set; }
    }
}
