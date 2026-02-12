using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HermesAPI.Migrations
{
    /// <inheritdoc />
    public partial class Relacionamentos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Avaliacoes_FreteId",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "Veiculo",
                table: "Usuarios");

            migrationBuilder.AddColumn<int>(
                name: "TransportadorId",
                table: "Veiculos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "FreteId",
                table: "Notificacoes",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<decimal>(
                name: "Valor",
                table: "Fretes",
                type: "decimal(10,2)",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AlterColumn<int>(
                name: "TransportadorId",
                table: "Fretes",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<DateTime>(
                name: "DataConclusao",
                table: "Fretes",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<decimal>(
                name: "Nota",
                table: "Avaliacoes",
                type: "decimal(3,2)",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.CreateIndex(
                name: "IX_Veiculos_TransportadorId",
                table: "Veiculos",
                column: "TransportadorId");

            migrationBuilder.CreateIndex(
                name: "IX_Notificacoes_FreteId",
                table: "Notificacoes",
                column: "FreteId");

            migrationBuilder.CreateIndex(
                name: "IX_Avaliacoes_FreteId",
                table: "Avaliacoes",
                column: "FreteId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Notificacoes_Fretes_FreteId",
                table: "Notificacoes",
                column: "FreteId",
                principalTable: "Fretes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Veiculos_Usuarios_TransportadorId",
                table: "Veiculos",
                column: "TransportadorId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Notificacoes_Fretes_FreteId",
                table: "Notificacoes");

            migrationBuilder.DropForeignKey(
                name: "FK_Veiculos_Usuarios_TransportadorId",
                table: "Veiculos");

            migrationBuilder.DropIndex(
                name: "IX_Veiculos_TransportadorId",
                table: "Veiculos");

            migrationBuilder.DropIndex(
                name: "IX_Notificacoes_FreteId",
                table: "Notificacoes");

            migrationBuilder.DropIndex(
                name: "IX_Avaliacoes_FreteId",
                table: "Avaliacoes");

            migrationBuilder.DropColumn(
                name: "TransportadorId",
                table: "Veiculos");

            migrationBuilder.AddColumn<string>(
                name: "Veiculo",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FreteId",
                table: "Notificacoes",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Valor",
                table: "Fretes",
                type: "float",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10,2)");

            migrationBuilder.AlterColumn<int>(
                name: "TransportadorId",
                table: "Fretes",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DataConclusao",
                table: "Fretes",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Nota",
                table: "Avaliacoes",
                type: "float",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(3,2)");

            migrationBuilder.CreateIndex(
                name: "IX_Avaliacoes_FreteId",
                table: "Avaliacoes",
                column: "FreteId");
        }
    }
}
