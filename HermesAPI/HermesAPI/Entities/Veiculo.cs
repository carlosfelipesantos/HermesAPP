using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace HermesAPI.Entities
{
    public class Veiculo
    {
        public int Id { get; set; }
        public string TipoVeiculo { get; set; }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Placa { get; set; }
        public string Capacidade { get; set; }
        public bool Disponivel { get; set; }
        public DateTime DataCadastro { get; set; }
    }
}
