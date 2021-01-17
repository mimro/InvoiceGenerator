namespace InvoiceGenerator.Services.InvoiceTemplates.DbContexts
{
    using InvoiceGenerator.Services.InvoiceTemplates.Entities;
    using InvoiceGenerator.Services.InvoiceTemplates.Enumerations;
    using Microsoft.EntityFrameworkCore;
    using System;

    public class InvoiceTemplateDbContext : DbContext
    {
        public InvoiceTemplateDbContext(DbContextOptions<InvoiceTemplateDbContext> options) : base(options)
        {

        }
        public DbSet<InvoiceTemplate> InvoiceTemplates { get; set; }
        public DbSet<InvoiceTemplateContent> InvoiceTemplateContents { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var invoiceTemplateId = Guid.Parse("{CFB88E29-4744-48C0-94FA-B25B92DEA314}");
            var invoiceTemplate2Id = Guid.Parse("{CFB88E29-4744-48C0-94FA-B25B92DEA315}");

            modelBuilder.Entity<InvoiceTemplateContent>().HasData(new InvoiceTemplateContent
            {
                InvoiceTemplateContentId = Guid.Parse("{CFB88E29-4744-48C0-94FA-B25B92DEA317}"),
                InvoiceTemplateId = invoiceTemplateId,
                Content = "<div>Invoice Template 1 </div>",
                ContentType = ContentType.Html
            });

            modelBuilder.Entity<InvoiceTemplateContent>().HasData(new InvoiceTemplateContent
            {
                InvoiceTemplateContentId = Guid.Parse("{CFB88E29-4744-48C0-94FA-B25B92DEA319}"),
                InvoiceTemplateId = invoiceTemplate2Id,
                Content = "<div>Invoice Template 2 </div>",
                ContentType = ContentType.Html
            });

            modelBuilder.Entity<InvoiceTemplate>().HasData(new InvoiceTemplate
            {
                InvoiceTemplateId = invoiceTemplateId,
                Name = "Template 1",
                StorageDate = DateTime.Now,
            });

            modelBuilder.Entity<InvoiceTemplate>().HasData(new InvoiceTemplate
            {
                InvoiceTemplateId = invoiceTemplate2Id,
                Name = "Template 2",
                StorageDate = DateTime.Now,
            });
        }
    }
}
