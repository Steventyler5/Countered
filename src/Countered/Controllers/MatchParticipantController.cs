using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Countered.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Countered.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [EnableCors("AllowAnyMethod")]
    public class MatchParticipantController : Controller
    {
        private CounteredContext _context;
        public MatchParticipantController(CounteredContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get([FromQuery]string givenName)
        {
            var MatchListWins = (from mp in _context.MatchParticipant
                             where mp.ChampName == givenName && mp.Winner == "Winner"
                             select mp.MatchId).ToList();

            var MatchListLosses = (from mp in _context.MatchParticipant
                                 where mp.ChampName == givenName && mp.Winner == "Loser"
                                 select mp.MatchId).ToList();

            IQueryable < MatchParticipant > stats = from mp in _context.MatchParticipant
                                                    select mp;

            List<object> matchList = new List<object>();
            foreach(int mId in MatchListWins)
            {
                var matchWins = (from mp in _context.MatchParticipant
                                where mp.ChampName != givenName && mp.Winner == "Loser" && mp.MatchId == mId
                                select new
                                {
                                    Champ2Name = mp.ChampName,
                                    Outcome = mp.Winner
                                }).First();
                matchList.Add(matchWins);
            }

            foreach (int mId in MatchListLosses)
            {
                var matchLoss = (from mp in _context.MatchParticipant
                                 where mp.ChampName != givenName && mp.Winner == "Winner" && mp.MatchId == mId
                                 select new
                                 {
                                     Champ2Name = mp.ChampName,
                                     Outcome = mp.Winner
                                 }).First();
                matchList.Add(matchLoss);
            }


            //if (givenName != null)
            //{
            //    stats = stats.Where(st => st.ChampName == givenName);
            //}

            return Ok(matchList);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
