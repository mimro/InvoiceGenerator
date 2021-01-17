using InvoiceGenerator.History.Api.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.History.Api.Context
{
    public class InvoiceHistoryContext : DbContext
    {
        public InvoiceHistoryContext(DbContextOptions options) : base(options)
        {   
        }

        public DbSet<InvoiceHistory> InvoiceHistories { get; set; }

        public DbSet<InvoiceData> InvoiceData { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var history = new List<InvoiceHistory> {
               new InvoiceHistory
            {
                Id=1,
                CreationDate = DateTime.UtcNow.AddDays(-150),
                InvoiceNumber = "FV1"
            }
            };

            modelBuilder.Entity<InvoiceHistory>().HasData(history);

        }
    }
}
