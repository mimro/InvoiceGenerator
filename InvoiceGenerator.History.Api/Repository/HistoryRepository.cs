using InvoiceGenerator.History.Api.Context;
using InvoiceGenerator.History.Api.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.History.Api.Repository
{
    public class HistoryRepository : IHistoryRepository
    {
        public readonly InvoiceHistoryContext invoiceHistoryContext;

        public HistoryRepository(InvoiceHistoryContext invoiceHistoryContext)
        {
            this.invoiceHistoryContext = invoiceHistoryContext;
        }

        public void Add<T>(T entity) where T : class
        {
            this.invoiceHistoryContext.Add(entity);
        }

        public void Delete(int Id)
        {
            var removeEntity = this.invoiceHistoryContext.InvoiceHistories.Where(h => h.Id == Id);
            this.invoiceHistoryContext.Remove(removeEntity);
        }

        public async Task<IEnumerable<InvoiceHistory>> GetAllInvoiceHistories()
        {
            IEnumerable<InvoiceHistory> histories =  this.invoiceHistoryContext.InvoiceHistories;
            
            return histories;
        }

        public async Task<InvoiceHistory> GetInvoiceHistoryWithDataById(int id)
        {
            var histories = await this.invoiceHistoryContext.InvoiceHistories.Include(d=>d.InvoiceData).FirstOrDefaultAsync(h => h.Id == id);

            return histories;
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await this.invoiceHistoryContext.SaveChangesAsync()) > 0;
        }
    }
}
