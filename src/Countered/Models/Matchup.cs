using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countered.Models
{
    public class Matchup
    {
        //public string Champ1Name { get; set; }
        public string Champ2Name { get; set; }
        public int Champ1Wins { get; set; }
        public int Champ1Losses { get; set; }
    }
}
