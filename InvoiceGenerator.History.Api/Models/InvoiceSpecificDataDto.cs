using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class InvoiceSpecificDataDto
    {
        [JsonProperty(PropertyName = "number")]
        [Display(Name = "Numer polisy")]
        public string Number { get; set; }

        [JsonProperty(PropertyName = "issueDate")]
        [Display(Name = "Data wystawienia")]
        public DateTime IssueDate { get; set; }

        [JsonProperty(PropertyName = "sellingDate")]
        [Display(Name = "Data sprzedaży")]
        public DateTime SellingDate { get; set; }

        [JsonProperty(PropertyName = "placeOfIssue")]
        [Display(Name = "Miejsce sprzedaży")]
        public string PlaceOfIssue { get; set; }
    }
}
