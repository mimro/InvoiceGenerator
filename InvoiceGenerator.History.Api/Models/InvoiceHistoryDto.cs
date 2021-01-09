using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.History.Api.Models
{
    public class InvoiceHistoryDto
    {
        public int Id { get; set; }

        public DateTime CreationDate { get; set; }

        public string InvoiceNumber { get; set; }

        public InvoiceDataDto InvoiceData { get; set; }

    }
}
