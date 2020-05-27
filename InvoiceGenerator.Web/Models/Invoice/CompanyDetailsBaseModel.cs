using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class CompanyDetailsBaseViewModel
    {
     public string CompanyName { get; set; }

     public string VatId { get; set; }

     public string Street { get; set; }

     public string City { get; set; }
     
     public string ZipCode { get; set; }
    }
}
