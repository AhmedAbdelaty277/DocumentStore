using System;
using DocumentStore.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace DocumentStore.Migrations
{
    [DbContext(typeof(DocumentStoreDbContext))]
    partial class DocumentStoreDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DocumentStore.Models.Document", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DueDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PriorityId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PriorityId");

                    b.ToTable("Documents");
                });

            modelBuilder.Entity("DocumentStore.Models.Priority", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Priorities");
                });

            modelBuilder.Entity("DocumentStore.Models.Document", b =>
                {
                    b.HasOne("DocumentStore.Models.Priority", "Priority")
                        .WithMany("Documents")
                        .HasForeignKey("PriorityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Priority");
                });

            modelBuilder.Entity("DocumentStore.Models.Priority", b =>
                {
                    b.Navigation("Documents");
                });
        }
    }
}
