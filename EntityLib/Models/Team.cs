using System.Collections.Generic;

namespace EntityLib.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LogoUrl { get; set; }
        public List<Member> Members { get; set; }
    }
}
