using InvoiceGenerator.History.Api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.History.Api.Repository
{
    public interface IHistoryRepository
    {
        void Add<T>(T entity) where T : class;

        void Delete(int Id);

        Task<bool> SaveChangesAsync();

        Task<IEnumerable<InvoiceHistory>> GetAllInvoiceHistories();

        Task<InvoiceHistory> GetInvoiceHistoryWithDataById(int id);
    }
}
