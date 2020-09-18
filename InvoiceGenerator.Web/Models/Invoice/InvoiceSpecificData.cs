using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceGenerator.Web.Models.Invoice
{
    [Serializable]
    public class InvoiceSpecificData
    {
        [JsonProperty(PropertyName = "number")]
        public string Number { get; set; }

        [JsonProperty(PropertyName = "issueDate")]
        public DateTime IssueDate { get; set; }

        [JsonProperty(PropertyName = "sellingDate")]
        public DateTime SellingDate { get; set; }

        [JsonProperty(PropertyName = "placeOfIssue")]
        public string PlaceOfIssue { get; set; }
    }
}
