using Microsoft.EntityFrameworkCore;

namespace Demo.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Models.UserModel> Users { get; set; } = null!;
    }
}
