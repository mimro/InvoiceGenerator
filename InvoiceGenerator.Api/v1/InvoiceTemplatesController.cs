using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvoiceGenerator.Models.InvoiceTemplates;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceGenerator.Api.v1
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceTemplatesController : ControllerBase
    {
        // GET: api/InvoiceTemplates
        [HttpGet]
        public Task<IEnumerable<InvoiceTemplateViewModel>> Get()
        {
            //// Take all invoiceTemplateViewModels
            
            return null;
        }

        // GET: api/InvoiceTemplates/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/InvoiceTemplates
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/InvoiceTemplates/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
