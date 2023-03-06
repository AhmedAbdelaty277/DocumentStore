using System.Collections.Generic;

namespace DocumentStore.Models
{
    public class Priority
    {
        public Priority()
        {
            this.Documents = new HashSet<Document>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
    }
}
