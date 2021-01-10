﻿// <auto-generated />
using System;
using InvoiceGenerator.History.Api.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace InvoiceGenerator.History.Api.Migrations
{
    [DbContext(typeof(InvoiceHistoryContext))]
    [Migration("20210109144956_addInvoiceData")]
    partial class addInvoiceData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("InvoiceGenerator.History.Api.Entities.InvoiceData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("JsonEncodedInvoice")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("InvoiceData");
                });

            modelBuilder.Entity("InvoiceGenerator.History.Api.Entities.InvoiceHistory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("InvoiceDataId")
                        .HasColumnType("int");

                    b.Property<string>("InvoiceNumber")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("InvoiceDataId");

                    b.ToTable("InvoiceHistories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CreationDate = new DateTime(2020, 8, 12, 14, 49, 55, 265, DateTimeKind.Utc).AddTicks(5709),
                            InvoiceNumber = "FV1"
                        });
                });

            modelBuilder.Entity("InvoiceGenerator.History.Api.Entities.InvoiceHistory", b =>
                {
                    b.HasOne("InvoiceGenerator.History.Api.Entities.InvoiceData", "InvoiceData")
                        .WithMany()
                        .HasForeignKey("InvoiceDataId");

                    b.Navigation("InvoiceData");
                });
#pragma warning restore 612, 618
        }
    }
}