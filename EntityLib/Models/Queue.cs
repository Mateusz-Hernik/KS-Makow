using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityLib.Models
{
    [Table("Queue")]
    public class Queue
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public int SeasonId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public List<Match> Matches { get; set; }
    }
}
