using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class InvoiceSpecificDataModel
    {
       public string Number { get; set; }

        public DateTime IssueDate { get; set; }
        
        public DateTime SellingDate { get; set; }
        
        public string PlaceOfIssue { get; set; }
    }
}
