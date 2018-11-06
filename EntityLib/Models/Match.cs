using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityLib.Models
{
    [Table("Match")]
    public class Match
    {
        public int Id { get; set; }
        public DateTime? StartDate { get; set; }
        public string Location { get; set; }
        public int TeamHomeId { get; set; }
        public int TeamAwayId { get; set; }
        public int QueueId { get; set; }
        public int? ResultId { get; set; }
    }
}
