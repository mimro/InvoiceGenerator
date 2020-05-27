using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceGenerator.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiveInvoiceDataController : ControllerBase
    {
        public string ReceiveData(string invoiceData)
        {
            return invoiceData;
        }
    }
}