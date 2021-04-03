using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumCollectionDomain.Models
{
    //Cada música deve possuir um nome e uma duração em segundos. 
    public class Musica
    {
        public string MusicaId { get; set; }
        public string AlbumId { get; set; }
        public string Titulo { get; set; }
        public string Duracao { get; set; }


        public override bool Equals(object obj)
        {
            return obj is Musica && ((Musica)obj).MusicaId == this.MusicaId;
        }

        public override int GetHashCode()
        {
            return ("Musica######" + MusicaId).GetHashCode();
        }
    }
}
