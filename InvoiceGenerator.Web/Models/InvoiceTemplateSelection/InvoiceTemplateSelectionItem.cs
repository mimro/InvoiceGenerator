using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.InvoiceTemplateSelection
{
    public class InvoiceTemplateSelectionItem
    {
        public string TemplateName { get; set; }

        public byte[] TemplateImage { get; private set; }
    }
}
