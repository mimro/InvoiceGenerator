using AutoMapper;
using InvoiceGenerator.History.Api.Entities;
using InvoiceGenerator.History.Api.Models;
using System;

namespace InvoiceGenerator.History.Api.Profiles
{
    public class InvoiceHistoryProfile : Profile
    {
        public InvoiceHistoryProfile()
        {
            CreateMap<InvoiceHistory, InvoiceHistoryDto>().ForMember(d=>d.CreationDate, m=>m.MapFrom(s=>DateTime.ParseExact(s.CreationDate.ToString("yyyy - MM - dd HH: mm:ss"), "yyyy - MM - dd HH: mm:ss", null)));
            CreateMap<InvoiceData, InvoiceDataDto>();
        }
    }
}
