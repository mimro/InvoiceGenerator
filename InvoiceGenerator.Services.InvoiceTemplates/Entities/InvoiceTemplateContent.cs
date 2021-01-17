using InvoiceGenerator.Services.InvoiceTemplates.Enumerations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Services.InvoiceTemplates.Entities
{
    public class InvoiceTemplateContent
    {
        public Guid InvoiceTemplateContentId { get; set; }

        public string Content { get; set; }

        public ContentType ContentType { get; set; }

        public Guid InvoiceTemplateId { get; set; }

        public InvoiceTemplate InvoiceTemplate { get; set; }
    }
}
