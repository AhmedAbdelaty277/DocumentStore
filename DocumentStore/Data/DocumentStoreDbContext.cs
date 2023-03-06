using DocumentStore.Models;
using Microsoft.EntityFrameworkCore;

namespace DocumentStore.Data
{
    public class DocumentStoreDbContext : DbContext
    {
        public DocumentStoreDbContext(DbContextOptions<DocumentStoreDbContext> options) : base(options)
        {
            // .....
        }

        public DbSet<Document> Documents { get; set; }
        public DbSet<Priority> Priorities { get; set; }
    }
}
