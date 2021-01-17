namespace InvoiceGenerator.DAL.EF
{
    using InvoiceGenerator.Web.Models.Invoice;
    using Microsoft.EntityFrameworkCore;

    public class InvoiceContext : DbContext
    {
        public InvoiceContext(DbContextOptions options) : base(options) { }

        public DbSet<Invoice> Invoices { get; set; }

        public DbSet<Product> Products { get; set; }
    }
}
