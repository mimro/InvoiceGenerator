using InvoiceGenerator.Services.InvoiceTemplates.DbContexts;
using InvoiceGenerator.Services.InvoiceTemplates.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Services.InvoiceTemplates.Repositories
{
    public class InvoiceTemplateRepository : IInvoiceTemplateRepository
    {
        private readonly InvoiceTemplateDbContext invoiceTemplateDbContext;

        public InvoiceTemplateRepository(InvoiceTemplateDbContext invoiceTemplateDbContext)
        {
            this.invoiceTemplateDbContext = invoiceTemplateDbContext; 
        }

        public async Task<IEnumerable<InvoiceTemplate>> GetAllInvoiceTemplates()
        {
            return await invoiceTemplateDbContext.InvoiceTemplates.ToListAsync();
        }
    }
}
