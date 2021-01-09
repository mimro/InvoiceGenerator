using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvoiceGenerator.History.Api.Migrations
{
    public partial class addInvoiceData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "JsonEncodedInvoice",
                table: "InvoiceHistories");

            migrationBuilder.AddColumn<int>(
                name: "InvoiceDataId",
                table: "InvoiceHistories",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "InvoiceData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JsonEncodedInvoice = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvoiceData", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "InvoiceHistories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2020, 8, 12, 14, 49, 55, 265, DateTimeKind.Utc).AddTicks(5709));

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceHistories_InvoiceDataId",
                table: "InvoiceHistories",
                column: "InvoiceDataId");

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceHistories_InvoiceData_InvoiceDataId",
                table: "InvoiceHistories",
                column: "InvoiceDataId",
                principalTable: "InvoiceData",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceHistories_InvoiceData_InvoiceDataId",
                table: "InvoiceHistories");

            migrationBuilder.DropTable(
                name: "InvoiceData");

            migrationBuilder.DropIndex(
                name: "IX_InvoiceHistories_InvoiceDataId",
                table: "InvoiceHistories");

            migrationBuilder.DropColumn(
                name: "InvoiceDataId",
                table: "InvoiceHistories");

            migrationBuilder.AddColumn<string>(
                name: "JsonEncodedInvoice",
                table: "InvoiceHistories",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "InvoiceHistories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreationDate", "JsonEncodedInvoice" },
                values: new object[] { new DateTime(2020, 8, 10, 23, 22, 41, 111, DateTimeKind.Utc).AddTicks(1856), "test" });
        }
    }
}
