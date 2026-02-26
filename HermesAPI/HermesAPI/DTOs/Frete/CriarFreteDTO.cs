namespace HermesAPI.DTOs.Frete
{
    public class CriarFreteDTO
    {
        public string Origem { get; set; }
        public string Destino { get; set; }
        public double Valor { get; set; }
        public string DescricaoCarga { get; set; }

        public int ClienteId { get; set; }
    }
}
