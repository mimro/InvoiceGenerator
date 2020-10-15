using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using InvoiceGenerator.Web.Models.InvoiceTemplateSelection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace InvoiceGenerator.Web.Controllers
{
    [Route("api/invoice-templates")]
    [ApiController]
    public class InvoiceTemplateListController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<InvoiceTemplateSelectionItem> Get()
        {

            IEnumerable<InvoiceTemplateSelectionItem> templates;

            string templateJson = @"~\Data\TemplatesData.json";
            using (StreamReader r = new StreamReader(templateJson))
            {
                string json = r.ReadToEnd();
                templates = JsonConvert.DeserializeObject<IEnumerable<InvoiceTemplateSelectionItem>>(json);
            }
            return templates;
        }

        [HttpPost]
        [Authorize]
        public HttpStatusCode Post(InvoiceTemplateSelectionItem invoiceTemplateSelectionItem)
        {
            return HttpStatusCode.NotImplemented;
        }

        [HttpPut]
        [Authorize]
        public HttpStatusCode Put(InvoiceTemplateSelectionItem invoiceTemplateSelectionItem)
        {
            return HttpStatusCode.NotImplemented;
        }

        [HttpDelete]
        [Authorize]
        public HttpStatusCode Delete(InvoiceTemplateSelectionItem invoiceTemplateSelectionItem)
        {
            return HttpStatusCode.NotImplemented;
        }
    }
}