using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvoiceGenerator.Services.InvoiceTemplates.Migrations
{
    public partial class UpdateDatabaseNames : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Categories_InvoiceTemplateId",
                table: "Events");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Events",
                table: "Events");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.RenameTable(
                name: "Events",
                newName: "InvoiceTemplateContents");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "InvoiceTemplates");

            migrationBuilder.RenameIndex(
                name: "IX_Events_InvoiceTemplateId",
                table: "InvoiceTemplateContents",
                newName: "IX_InvoiceTemplateContents_InvoiceTemplateId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InvoiceTemplateContents",
                table: "InvoiceTemplateContents",
                column: "InvoiceTemplateContentId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InvoiceTemplates",
                table: "InvoiceTemplates",
                column: "InvoiceTemplateId");

            migrationBuilder.UpdateData(
                table: "InvoiceTemplates",
                keyColumn: "InvoiceTemplateId",
                keyValue: new Guid("cfb88e29-4744-48c0-94fa-b25b92dea314"),
                column: "StorageDate",
                value: new DateTime(2020, 10, 21, 0, 4, 45, 500, DateTimeKind.Local).AddTicks(2021));

            migrationBuilder.UpdateData(
                table: "InvoiceTemplates",
                keyColumn: "InvoiceTemplateId",
                keyValue: new Guid("cfb88e29-4744-48c0-94fa-b25b92dea315"),
                column: "StorageDate",
                value: new DateTime(2020, 10, 21, 0, 4, 45, 504, DateTimeKind.Local).AddTicks(9821));

            migrationBuilder.AddForeignKey(
                name: "FK_InvoiceTemplateContents_InvoiceTemplates_InvoiceTemplateId",
                table: "InvoiceTemplateContents",
                column: "InvoiceTemplateId",
                principalTable: "InvoiceTemplates",
                principalColumn: "InvoiceTemplateId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InvoiceTemplateContents_InvoiceTemplates_InvoiceTemplateId",
                table: "InvoiceTemplateContents");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InvoiceTemplates",
                table: "InvoiceTemplates");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InvoiceTemplateContents",
                table: "InvoiceTemplateContents");

            migrationBuilder.RenameTable(
                name: "InvoiceTemplates",
                newName: "Categories");

            migrationBuilder.RenameTable(
                name: "InvoiceTemplateContents",
                newName: "Events");

            migrationBuilder.RenameIndex(
                name: "IX_InvoiceTemplateContents_InvoiceTemplateId",
                table: "Events",
                newName: "IX_Events_InvoiceTemplateId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "InvoiceTemplateId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Events",
                table: "Events",
                column: "InvoiceTemplateContentId");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "InvoiceTemplateId",
                keyValue: new Guid("cfb88e29-4744-48c0-94fa-b25b92dea314"),
                column: "StorageDate",
                value: new DateTime(2020, 10, 20, 23, 56, 45, 22, DateTimeKind.Local).AddTicks(1109));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "InvoiceTemplateId",
                keyValue: new Guid("cfb88e29-4744-48c0-94fa-b25b92dea315"),
                column: "StorageDate",
                value: new DateTime(2020, 10, 20, 23, 56, 45, 26, DateTimeKind.Local).AddTicks(5012));

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Categories_InvoiceTemplateId",
                table: "Events",
                column: "InvoiceTemplateId",
                principalTable: "Categories",
                principalColumn: "InvoiceTemplateId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
