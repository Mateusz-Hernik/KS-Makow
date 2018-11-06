using System;

namespace EntityLib.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime PublicDate { get; set; }
        public int NewsId { get; set; }
        public int? ParentId { get; set; }
    }
}
