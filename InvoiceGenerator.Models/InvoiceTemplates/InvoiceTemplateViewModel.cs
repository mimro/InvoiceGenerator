using System;

namespace InvoiceGenerator.Models.InvoiceTemplates
{
    public class InvoiceTemplateViewModel
    {
        public int Id { get; set; }

        public Uri ImageUrl { get; set; }

        public string Name { get; set; }
    }
}
