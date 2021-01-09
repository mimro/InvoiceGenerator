using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.History.Api.Entities
{
    public class InvoiceData
    {
       public int Id { get; set; }

        public string JsonEncodedInvoice { get; set; }
    }
}
