using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using InvoiceGenerator.History.Api.Entities;
using InvoiceGenerator.History.Api.Models;
using InvoiceGenerator.History.Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceGenerator.History.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceHistoryController : ControllerBase
    {
        private readonly IHistoryRepository historyRepository;
        private readonly IMapper mapper;

        public InvoiceHistoryController(IHistoryRepository historyRepository, IMapper mapper)
        {
            this.historyRepository = historyRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<InvoiceHistoryDto>>> Get()
        {

            IEnumerable<InvoiceHistory> histories = await this.historyRepository.GetAllInvoiceHistories();
            var dto = mapper.Map<List<InvoiceHistoryDto>>(histories).OrderByDescending(d => d.CreationDate);

            return Ok(dto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<InvoiceHistoryDto>>> Get(int id)
        {
            var history = await this.historyRepository.GetInvoiceHistoryWithDataById(id);
            var dto = mapper.Map<InvoiceHistoryDto>(history);
          
            if (dto == null)
            {
                  return StatusCode(404);
            }

            return Ok(dto);
        }

        [HttpPost]
        public async Task<ActionResult<InvoiceHistoryDto>> Post([FromBody] InvoiceHistory invoiceHistory)
        {
            invoiceHistory.CreationDate = DateTime.UtcNow;
            this.historyRepository.Add<InvoiceHistory>(invoiceHistory);
            await this.historyRepository.SaveChangesAsync();

            return Ok("stored ok");
        }

    }
}
