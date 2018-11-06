using System.ComponentModel.DataAnnotations.Schema;

namespace EntityLib.Models
{
    [Table("User")]
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
    }
}
