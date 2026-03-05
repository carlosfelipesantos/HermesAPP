using AutoMapper;
using HermesAPI.DTOs.Veiculo;
using HermesAPI.Entities;

namespace HermesAPI.Profiles
{
    public class VeiculoProfile : Profile
    {
        public VeiculoProfile()
        {
            CreateMap<Veiculo, VeiculoDTO>(); 
            CreateMap<CriarVeiculoDTO, Veiculo>();
        }
    }
}
