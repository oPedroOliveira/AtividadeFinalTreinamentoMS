using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumCollectionDomain.Models
{
    //Cada álbum deve possuir um nome, um ano de lançamento e uma lista de músicas.
    public class Album
    {
        public string AlbumId { get; set; }
        public string Nome { get; set; }
        public string Ano { get; set; }
        public IList<Musica> Musicas { get; set; } = new List<Musica>();
    }
}
