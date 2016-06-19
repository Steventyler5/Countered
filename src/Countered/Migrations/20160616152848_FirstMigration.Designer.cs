using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Countered.Models;

namespace Countered.Migrations
{
    [DbContext(typeof(CounteredContext))]
    [Migration("20160616152848_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Countered.Models.Champion", b =>
                {
                    b.Property<int>("ChampionId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ChampionName");

                    b.Property<string>("Lane");

                    b.Property<int?>("OverallWinRate");

                    b.HasKey("ChampionId");

                    b.ToTable("Champion");
                });

            modelBuilder.Entity("Countered.Models.Matchup", b =>
                {
                    b.Property<int>("MatchupId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Champion1Id");

                    b.Property<decimal>("Champion1WinRate");

                    b.Property<int>("Champion2Id");

                    b.Property<decimal>("Champion2WinRate");

                    b.Property<int?>("ChampionId");

                    b.HasKey("MatchupId");

                    b.HasIndex("ChampionId");

                    b.ToTable("Matchup");
                });

            modelBuilder.Entity("Countered.Models.Matchup", b =>
                {
                    b.HasOne("Countered.Models.Champion")
                        .WithMany()
                        .HasForeignKey("ChampionId");
                });
        }
    }
}
