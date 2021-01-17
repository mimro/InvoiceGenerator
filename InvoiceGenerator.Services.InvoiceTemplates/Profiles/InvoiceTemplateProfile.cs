namespace InvoiceGenerator.Services.InvoiceTemplates.Profiles
{
    using AutoMapper;

    public class InvoiceTemplateProfile : Profile
    {
        public InvoiceTemplateProfile()
        {
            CreateMap<Entities.InvoiceTemplate, Models.InvoiceTemplateDTO>();
        }
    }
}
