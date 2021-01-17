namespace InvoiceGenerator.Web.Models.Invoice
{
    using System;

    public class InvoiceSpecificData
    {
        public string Number { get; set; }

        public DateTime IssueDate { get; set; }

        public DateTime SellingDate { get; set; }

        public string PlaceOfIssue { get; set; }
    }
}
