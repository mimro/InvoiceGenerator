using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.ViewModels.DocumentGeneration
{
    public class InvoiceViewModel
    {
        public InvoiceSpecificDataModel InvoiceSpecificData { get; set; }

        public IssuerDetailsViewModel IssuerDetails { get; set; }
        
        public RecipentDetailsViewModel RecipentDetails { get; set; }
        
        public List<ProductViewModel> ProductList { get; set; }
    }
}
