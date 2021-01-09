using System;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class CompanyDetailsDto
    {
     public string CompanyName { get; set; }

     public string Address { get; set; }

     public string VatId { get; set; }

     public string Street { get; set; }

     public string City { get; set; }
     
     public string ZipCode { get; set; }
    }
}
