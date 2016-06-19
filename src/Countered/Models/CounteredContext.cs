using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Countered.Models
{
    public class CounteredContext : DbContext
    {
        public CounteredContext(DbContextOptions<CounteredContext> options)
            : base(options)
        { }

    public DbSet<MatchParticipant> MatchParticipant { get; set; }
    }
}
