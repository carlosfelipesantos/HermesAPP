using AutoMapper;
using HermesAPI.DTOs.Frete;
using HermesAPI.Entities;

namespace HermesAPI.Profiles
{
    public class FreteProfile: Profile
    {
        public FreteProfile()
        {
            CreateMap<Frete, FreteDTO>();
            CreateMap<CriarFreteDTO, Frete>();
            CreateMap<AtualizarStatusFreteDTO, Frete>();
        }
    }
}
