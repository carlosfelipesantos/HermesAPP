using AutoMapper;
using HermesAPI.DTOs.Avaliacao;
using HermesAPI.Entities;

namespace HermesAPI.Profiles
{
    public class AvaliacaoProfile: Profile
    {
        public AvaliacaoProfile()
        {
            CreateMap<Avaliacao, AvaliacaoDTO>();
            CreateMap<CriarAvaliacaoDTO, Avaliacao>();
        }
    }
}
