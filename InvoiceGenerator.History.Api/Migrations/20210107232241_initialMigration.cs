using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvoiceGenerator.History.Api.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InvoiceHistories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    InvoiceNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    JsonEncodedInvoice = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvoiceHistories", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "InvoiceHistories",
                columns: new[] { "Id", "CreationDate", "InvoiceNumber", "JsonEncodedInvoice" },
                values: new object[] { 1, new DateTime(2020, 8, 10, 23, 22, 41, 111, DateTimeKind.Utc).AddTicks(1856), "FV1", "test" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InvoiceHistories");
        }
    }
}
