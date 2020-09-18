using jsreport.Binary;
using jsreport.Local;
using jsreport.Types;
using System;
using System.IO;
using System.Threading.Tasks;

namespace InvoiceDocumentGenerator
{
    public class RenderPdf
    {
        public async Task render()
        {
            var rs = new LocalReporting()
                .UseBinary(JsReportBinary.GetBinary())
                .AsUtility()
                .Create();


            var report = await rs.RenderAsync(new RenderRequest
            {
                Template = new Template
                {
                    Recipe = Recipe.ChromePdf,
                    Engine = Engine.Handlebars,
                    Content = ""
				}
            });

            using (var fs = File.Create("out.pdf"))
            {
                report.Content.CopyTo(fs);
            }
        }
    }
}
