namespace HermesAPI.Entities
{
    public class Transportador:Usuario
    {
        public string Veiculo { get; set; }
        public string Documento { get; set; }
        public double AvaliacaoMedia { get; set; }
    }
}
