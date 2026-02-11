using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HermesAPI.Migrations
{
    /// <inheritdoc />
    public partial class EntidadesClienteTransportador : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Documento",
                table: "Usuarios");

            migrationBuilder.RenameColumn(
                name: "Veiculo",
                table: "Usuarios",
                newName: "FotoPerfil");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FotoPerfil",
                table: "Usuarios",
                newName: "Veiculo");

            migrationBuilder.AddColumn<string>(
                name: "Documento",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
