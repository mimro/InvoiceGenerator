using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.ViewModels.DocumentGeneration
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Jm { get; set; }
        public float NettoPrice { get; set; }
        public float NettoValue { get; set; }
        public int Vat { get; set; }
        public float VatValue { get; set; }
        public float GrossValue { get; set; }
    }
}
