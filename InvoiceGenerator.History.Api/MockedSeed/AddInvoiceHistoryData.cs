using InvoiceGenerator.History.Api.Context;
using InvoiceGenerator.History.Api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.History.Api.MockedSeed
{
    public static class AddInvoiceHistoryData
    {
        public static void Seed(InvoiceHistoryContext context)
        {
            context.InvoiceHistories.Add(new InvoiceHistory
            {
                CreationDate = DateTime.UtcNow.AddDays(-150),
                InvoiceNumber = "FV1"
            });
        }
    }
}
