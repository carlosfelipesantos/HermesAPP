namespace HermesAPI.Entities
{
    public class Cliente: Usuario
    {
        public DateTime DataNasc { get; set; }
        public ICollection<Frete> Fretes { get; set; } = new List<Frete>();


    }
}
