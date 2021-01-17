using InvoiceGenerator.Services.InvoiceTemplates.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Services.InvoiceTemplates.Repositories
{
    public interface IInvoiceTemplateRepository
    {
        Task<IEnumerable<InvoiceTemplate>> GetAllInvoiceTemplates();
    }
}
