namespace InvoiceGenerator.Services.InvoiceTemplates.Controllers
{
    using AutoMapper;
    using InvoiceGenerator.Services.InvoiceTemplates.Models;
    using InvoiceGenerator.Services.InvoiceTemplates.Repositories;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceTemplateContentController : ControllerBase
    {
        private readonly IInvoiceTemplateRepository invoiceTemplateRepository;
        private readonly IMapper mapper;

        public InvoiceTemplateContentController(IInvoiceTemplateRepository invoiceTemplateRepository, IMapper mapper)
        {
            this.invoiceTemplateRepository = invoiceTemplateRepository;
            this.mapper = mapper;
        }

        public Task<ActionResult<InvoiceTemplateContentDTO>> Get()
        {
            return null;
        }
    }
}