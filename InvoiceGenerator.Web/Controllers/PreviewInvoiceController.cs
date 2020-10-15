using InvoiceGenerator.Web.Extensions;
using InvoiceGenerator.Web.Models.Invoice;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Controllers
{
    [Route("Preview")]
    [ApiController]
    public class PreviewInvoiceController : Controller
    {
        [HttpGet]
        public async Task<string> Get(string invoiceData)
        {
            var invoiceModel = JsonConvert.DeserializeObject<InvoiceData>(invoiceData);

            string html = await this.RenderViewAsync("Classic", invoiceModel);

            return html;
        }
        
    }
}