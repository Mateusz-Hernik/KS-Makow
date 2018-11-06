using System;

namespace EntityLib.Models
{
    public class Member
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string PhotoUrl { get; set; }
        public DateTime BirthDate { get; set; }
        public int TeamId { get; set; }
        public int RoleId { get; set; }
    }
}
