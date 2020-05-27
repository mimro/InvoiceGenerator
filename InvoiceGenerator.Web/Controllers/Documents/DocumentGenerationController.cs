using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using InvoiceGenerator.Web.Models.Invoice;
using jsreport.AspNetCore;
using jsreport.Types;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceGenerator.Web.Controllers.Documents.DocumentGeneration
{
    [Route("Documents/DocumentGeneration/{action}")]
    public class DocumentGenerationViewController : Controller
    {
       [MiddlewareFilter(typeof(JsReportPipeline))]
        public IActionResult Index(string invoiceData)
        {
            HttpContext.JsReportFeature().Recipe(Recipe.ChromePdf);

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = false,
            };
            var invoiceViewModel = JsonSerializer.Deserialize<InvoiceViewModel>(invoiceData, options);

            var invoice = new InvoiceViewModel()
            {
                InvoiceSpecificData = new InvoiceSpecificDataModel()
                {
                    IssueDate = new DateTime(),
                    Number = "ABC123",
                    PlaceOfIssue = "Warszawa",
                    SellingDate = new DateTime()
                },
                IssuerDetails = new IssuerDetailsViewModel()
                {
                    City = "Łosice",
                    CompanyName = "EG Trans Elżbieta żodzik",

                }
            };

            return View(invoice);
        }
    }
}