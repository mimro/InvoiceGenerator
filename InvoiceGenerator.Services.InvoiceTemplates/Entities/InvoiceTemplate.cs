using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Services.InvoiceTemplates.Entities
{
    public class InvoiceTemplate
    {
        [Required]
        public Guid InvoiceTemplateId { get; set; }

        public string Name { get; set; }

        public InvoiceTemplateContent InvoiceTemplateContent { get;set; }

        public DateTime StorageDate { get; set; }
    }
}
