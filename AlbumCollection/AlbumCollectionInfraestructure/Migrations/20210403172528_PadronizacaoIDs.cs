using Microsoft.EntityFrameworkCore.Migrations;

namespace AlbumCollectionInfraestructure.Migrations
{
    public partial class PadronizacaoIDs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MusicaId",
                table: "Musica",
                type: "nvarchar(450)",
                nullable: false,
                defaultValueSql: "NEWID()",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "AlbumId",
                table: "Album",
                type: "nvarchar(450)",
                nullable: false,
                defaultValueSql: "NEWID()",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MusicaId",
                table: "Musica",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldDefaultValueSql: "NEWID()");

            migrationBuilder.AlterColumn<string>(
                name: "AlbumId",
                table: "Album",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldDefaultValueSql: "NEWID()");
        }
    }
}
