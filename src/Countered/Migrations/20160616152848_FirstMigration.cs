using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Countered.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Champion",
                columns: table => new
                {
                    ChampionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ChampionName = table.Column<string>(nullable: true),
                    Lane = table.Column<string>(nullable: true),
                    OverallWinRate = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Champion", x => x.ChampionId);
                });

            migrationBuilder.CreateTable(
                name: "Matchup",
                columns: table => new
                {
                    MatchupId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Champion1Id = table.Column<int>(nullable: false),
                    Champion1WinRate = table.Column<decimal>(nullable: false),
                    Champion2Id = table.Column<int>(nullable: false),
                    Champion2WinRate = table.Column<decimal>(nullable: false),
                    ChampionId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matchup", x => x.MatchupId);
                    table.ForeignKey(
                        name: "FK_Matchup_Champion_ChampionId",
                        column: x => x.ChampionId,
                        principalTable: "Champion",
                        principalColumn: "ChampionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Matchup_ChampionId",
                table: "Matchup",
                column: "ChampionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Matchup");

            migrationBuilder.DropTable(
                name: "Champion");
        }
    }
}
