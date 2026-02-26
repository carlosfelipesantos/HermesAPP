using HermesAPI.Entities;

namespace HermesAPI.DTOs.Frete
{
    public class FreteDTO
    {
        public int Id { get; set; }
        public string Origem { get; set; }
        public string Destino { get; set; }
        public string Status { get; set; }
        public double Valor { get; set; }
        public string DescricaoCarga { get; set; }
        public DateTime DataSolicitacao { get; set; }
        public DateTime? DataConclusao { get; set; }

        public int ClienteId { get; set; }
        public int? TransportadorId { get; set; }
       

    }
}
