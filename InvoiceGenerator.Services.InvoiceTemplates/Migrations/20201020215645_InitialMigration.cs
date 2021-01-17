using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InvoiceGenerator.Services.InvoiceTemplates.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    InvoiceTemplateId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    StorageDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.InvoiceTemplateId);
                });

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    InvoiceTemplateContentId = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    ContentType = table.Column<int>(nullable: false),
                    InvoiceTemplateId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.InvoiceTemplateContentId);
                    table.ForeignKey(
                        name: "FK_Events_Categories_InvoiceTemplateId",
                        column: x => x.InvoiceTemplateId,
                        principalTable: "Categories",
                        principalColumn: "InvoiceTemplateId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "InvoiceTemplateId", "Name", "StorageDate" },
                values: new object[] { new Guid("cfb88e29-4744-48c0-94fa-b25b92dea314"), "Template 1", new DateTime(2020, 10, 20, 23, 56, 45, 22, DateTimeKind.Local).AddTicks(1109) });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "InvoiceTemplateId", "Name", "StorageDate" },
                values: new object[] { new Guid("cfb88e29-4744-48c0-94fa-b25b92dea315"), "Template 2", new DateTime(2020, 10, 20, 23, 56, 45, 26, DateTimeKind.Local).AddTicks(5012) });

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "InvoiceTemplateContentId", "Content", "ContentType", "InvoiceTemplateId" },
                values: new object[] { new Guid("cfb88e29-4744-48c0-94fa-b25b92dea317"), "<div>Invoice Template 1 </div>", 1, new Guid("cfb88e29-4744-48c0-94fa-b25b92dea314") });

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "InvoiceTemplateContentId", "Content", "ContentType", "InvoiceTemplateId" },
                values: new object[] { new Guid("cfb88e29-4744-48c0-94fa-b25b92dea319"), "<div>Invoice Template 2 </div>", 1, new Guid("cfb88e29-4744-48c0-94fa-b25b92dea315") });

            migrationBuilder.CreateIndex(
                name: "IX_Events_InvoiceTemplateId",
                table: "Events",
                column: "InvoiceTemplateId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
