using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countered.Models
{
    public class MatchParticipant
    {
        public int MatchParticipantId { get; set; }
        public int MatchId { get; set; }
        public string ChampName { get; set; }
        public string Winner { get; set; }
    }
}
