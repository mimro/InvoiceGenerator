namespace InvoiceGenerator.Services.InvoiceTemplates.Controllers
{
    using AutoMapper;
    using InvoiceGenerator.Services.InvoiceTemplates.Models;
    using InvoiceGenerator.Services.InvoiceTemplates.Repositories;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceTemplateController : ControllerBase
    {
        private readonly IInvoiceTemplateRepository invoiceTemplateRepository;
        private readonly IMapper mapper;

        public InvoiceTemplateController(IInvoiceTemplateRepository invoiceTemplateRepository, IMapper mapper) 
        {
            this.invoiceTemplateRepository = invoiceTemplateRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<InvoiceTemplateDTO>>> Get()
        {
          //  var result = await invoiceTemplateRepository.GetAllInvoiceTemplates();
          //  var dto = mapper.Map<List<InvoiceTemplateDTO>>(result);

            return Ok("ok");
        }
    }
}