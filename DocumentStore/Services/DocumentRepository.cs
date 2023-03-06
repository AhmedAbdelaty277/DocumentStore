using System.Linq;
using DocumentStore.Data;
using DocumentStore.Models;
using System.Collections.Generic;
using DocumentStore.Services.Repositories;

namespace DocumentStore.Services
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly DocumentStoreDbContext context;

        public DocumentRepository(DocumentStoreDbContext _context)
        {
            context = _context;
        }

        public List<Document> GetAll()
        {
            return context.Documents.ToList();
        }

        public Document GetById(int id)
        {
            return context.Documents.Find(id);
        }

        public int Insert(Document doc)
        {
            context.Documents.Add(doc);

            int rawData = context.SaveChanges();
            return rawData;
        }

        public int Update(int id, Document doc)
        {
            Document document = context.Documents.Find(id);

            document.Name = doc.Name;
            document.CreatedDate = doc.CreatedDate;
            document.DueDate = doc.DueDate;
            document.PriorityId = doc.PriorityId;

            int rawData = context.SaveChanges();
            return rawData;
        }

        public int Delete(int id)
        {
            Document document = context.Documents.Find(id);

            context.Documents.Remove(document);

            int rawData = context.SaveChanges();
            return rawData;
        }
    }
}
