#nullable disable

namespace rat_game_api.Migrations;
using Microsoft.EntityFrameworkCore.Migrations;

/// <inheritdoc />
public partial class UserCreate : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.AddColumn<int>(
            name: "UserId",
            table: "Highscores",
            type: "int",
            nullable: false,
            defaultValue: 0);

        migrationBuilder.CreateTable(
            name: "Users",
            columns: table => new
            {
                Id = table.Column<int>(type: "int", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Username = table.Column<string>(type: "nvarchar(max)", nullable: false)
            },
            constraints: table => table.PrimaryKey("PK_Users", x => x.Id));

        migrationBuilder.CreateIndex(
            name: "IX_Highscores_UserId",
            table: "Highscores",
            column: "UserId");

        migrationBuilder.AddForeignKey(
            name: "FK_Highscores_Users_UserId",
            table: "Highscores",
            column: "UserId",
            principalTable: "Users",
            principalColumn: "Id",
            onDelete: ReferentialAction.Cascade);
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropForeignKey(
            name: "FK_Highscores_Users_UserId",
            table: "Highscores");

        migrationBuilder.DropTable(
            name: "Users");

        migrationBuilder.DropIndex(
            name: "IX_Highscores_UserId",
            table: "Highscores");

        migrationBuilder.DropColumn(
            name: "UserId",
            table: "Highscores");
    }
}
