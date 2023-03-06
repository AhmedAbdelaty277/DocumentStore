using System.Linq;
using DocumentStore.Data;
using DocumentStore.Models;
using System.Collections.Generic;
using DocumentStore.Services.Repositories;

namespace DocumentStore.Services
{
    public class PriorityRepository : IPriorityRepository
    {
        private readonly DocumentStoreDbContext context;

        public PriorityRepository(DocumentStoreDbContext _context)
        {
            context = _context;
        }

        public List<Priority> GetAll()
        {
            return context.Priorities.ToList();
        }
    }
}
