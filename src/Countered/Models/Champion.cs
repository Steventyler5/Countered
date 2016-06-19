using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countered.Models
{
    public class Champion
    {
        public int ChampionId { get; set; }
        public string ChampionName { get; set; }
        public string Lane { get; set; }
        public int? OverallWinRate { get; set; }
    }
}
