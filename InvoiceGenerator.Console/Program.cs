using InvoiceDocumentGenerator;
using System;
using System.Threading.Tasks;

namespace InvoiceGenerator.Console
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var pdf = new RenderPdf();
            await pdf.render();
        }
    }
}
