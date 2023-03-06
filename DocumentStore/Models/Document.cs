using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DocumentStore.Models
{
    public class Document
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DueDate { get; set; }

        [ForeignKey("Priority")]
        public int PriorityId { get; set; }
        public virtual Priority Priority { get; set; }
    }
}
