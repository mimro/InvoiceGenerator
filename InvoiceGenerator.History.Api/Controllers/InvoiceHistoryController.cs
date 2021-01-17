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
            try
            {
                IEnumerable<InvoiceHistory> histories = await this.historyRepository.GetAllInvoiceHistories();
                var dto = mapper.Map<List<InvoiceHistoryDto>>(histories).OrderByDescending(d => d.CreationDate);

                return Ok(dto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);               
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<InvoiceHistoryDto>>> Get(int id)
        {
            try
            {
                var history = await this.historyRepository.GetInvoiceHistoryWithDataById(id);
                var dto = mapper.Map<InvoiceHistoryDto>(history);

                if (dto == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound);
                }

                return Ok(dto);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        public async Task<ActionResult<InvoiceHistoryDto>> Post([FromBody] InvoiceHistory invoiceHistory)
        {
            try
            {
                invoiceHistory.CreationDate = DateTime.UtcNow;
                this.historyRepository.Add<InvoiceHistory>(invoiceHistory);
                await this.historyRepository.SaveChangesAsync();

                return Ok(invoiceHistory);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<InvoiceHistoryDto>> Delete(int id)
        {
            try
            {
                this.historyRepository.Delete(id);
                await this.historyRepository.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}
