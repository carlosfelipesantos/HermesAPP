

using HermesAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace HermesAPI.Data
{
    public class AppDbContext: DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) // injecao de banco
        {

        }

        public DbSet<Usuario> Usuarios { get; set; } //lista de usuarios
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Transportador> Transportadores { get; set; }

    }
}
