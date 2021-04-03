using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AlbumCollectionDomain.Models;

namespace AlbumCollectionInfraestructure.Data
{
    public class AlbumCollectionApplicationContext : DbContext
    {
        public AlbumCollectionApplicationContext (DbContextOptions<AlbumCollectionApplicationContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Album>()
                .HasMany(a => a.Musicas)
                .WithOne()
                .HasForeignKey(m => m.AlbumId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Album>()
                .Property(a => a.AlbumId)
                .HasDefaultValueSql("NEWID()");

            modelBuilder.Entity<Musica>()
                .Property(m => m.MusicaId)
                .HasDefaultValueSql("NEWID()");
        }

        public DbSet<Album> Album { get; set; }
        public DbSet<Musica> Musica { get; set; }
    }
}
