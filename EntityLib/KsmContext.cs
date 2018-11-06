using EntityLib.Models;
using Microsoft.EntityFrameworkCore;

namespace EntityLib
{
    public partial class KsmContext : DbContext
    {
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Match> Matches { get; set; }
        public virtual DbSet<Member> Members { get; set; }
        public virtual DbSet<News> Newses { get; set; }
        public virtual DbSet<Queue> Queues { get; set; }
        public virtual DbSet<Result> Results { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Season> Seasons { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Team> Teams { get; set; }

        public KsmContext(DbContextOptions<KsmContext> options)
            : base(options)
        {
        }
    }
}
