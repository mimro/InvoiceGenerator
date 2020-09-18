using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvoiceGenerator.Web.ViewModels.DocumentGeneration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceGenerator.Web.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ReceiveInvoiceDataController : ControllerBase
    {
        [HttpPost]
        async Task<string> Post([FromBody] string invoiceData)
        {
                return invoiceData;
        }
    }
}