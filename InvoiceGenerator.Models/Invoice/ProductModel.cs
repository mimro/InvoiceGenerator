using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class Product
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }

        [JsonProperty(PropertyName = "name")]
        [Display(Name = "Nazwa")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "quantity")]
        [Display(Name = "Ilość")]
        public int Quantity { get; set; }

        [JsonProperty(PropertyName = "jm")]
        [Display(Name = "j.m")]
        public string Jm { get; set; }

        [JsonProperty(PropertyName = "nettoPrice")]
        [Display(Name = "Cena netto")]
        public float NettoPrice { get; set; }

        [JsonProperty(PropertyName = "nettoValue")]
        [Display(Name = "Wartość netto")]
        public float NettoValue { get; set; }

        [JsonProperty(PropertyName = "vat")]
        [Display(Name = "vat")]
        public int Vat { get; set; }

        [JsonProperty(PropertyName = "vatValue")]
        [Display(Name = "wartość vat")]
        public float VatValue { get; set; }

        [JsonProperty(PropertyName = "grossValue")]
        [Display(Name = "Cena brutto")]
        public float GrossValue { get; set; }
    }
}
