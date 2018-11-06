using System;
using System.Collections.Generic;

namespace EntityLib.Models
{
    public class News
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public DateTime PublicDate { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
