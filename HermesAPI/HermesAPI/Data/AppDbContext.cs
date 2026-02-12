using HermesAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace HermesAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Transportador> Transportadores { get; set; }
        public DbSet<Frete> Fretes { get; set; }

        public DbSet<Avaliacao> Avaliacoes { get; set; }
        public DbSet<Notificacao> Notificacoes { get; set; }
        public DbSet<Veiculo> Veiculos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Frete>()
                .HasOne(f => f.Cliente)
                .WithMany(c => c.Fretes)
                .HasForeignKey(f => f.ClienteId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Frete>()
                .HasOne(f => f.Transportador)
                .WithMany(t => t.Fretes)
                .HasForeignKey(f => f.TransportadorId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
