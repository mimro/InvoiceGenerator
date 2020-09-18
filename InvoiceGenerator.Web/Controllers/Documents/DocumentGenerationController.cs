using System;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using InvoiceGenerator.Web.Models.Invoice;
using jsreport.AspNetCore;
using jsreport.Types;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InvoiceGenerator.Web.Controllers.Documents.DocumentGeneration
{
    [Route("Documents/DocumentGeneration/{action}")]
    public class DocumentGenerationViewController : Controller
    {
       [MiddlewareFilter(typeof(JsReportPipeline))]
       [HttpGet]
        public IActionResult Index(string invoiceData)
        {
            HttpContext.JsReportFeature().Recipe(Recipe.ChromePdf);

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = false,
            };
            var invoiceViewModel = invoiceData;
           // dynamic json = JsonConvert.DeserializeObject(invoiceData);
            var invoice = JsonConvert.DeserializeObject<InvoiceData>(invoiceData);

            ////var invoice = new InvoiceData()
            ////{
            ////    InvoiceSpecificData = new InvoiceSpecificData()
            ////    {
            ////        IssueDate = new DateTime(),
            ////        Number = "ABC123",
            ////        PlaceOfIssue = "Warszawa",
            ////        SellingDate = new DateTime()
            ////    },
            ////    IssuerDetails = new IssuerDetailsViewModel()
            ////    {
            ////        City = "Łosice",
            ////        CompanyName = "EG Trans Elżbieta żodzik",

            ////    }
            ////};

            return View(invoice);
        }
    }

    public class MyModel
    {
        public string invoiceData { get; set; }
    }
}