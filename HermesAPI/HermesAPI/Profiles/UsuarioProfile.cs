using AutoMapper;
using HermesAPI.DTOs.UsuarioDTO;
using HermesAPI.Entities;

namespace HermesAPI.Profiles
{
    public class UsuarioProfile : Profile
    {
        public UsuarioProfile() //construtor da classe, onde é definido o mapeamento entre as classes
        {
            CreateMap<UsuarioProfile, UsuarioDTO>(); //mapeamento entre a classe UsuarioProfile e UsuarioDTO, onde os campos com o mesmo nome serão mapeados automaticamente
            CreateMap<CriarUsuarioDTO, Usuario>(); //mapeamento entre a classe CriarUsuarioDTO e Usuario
            CreateMap<AtualizarUsuarioDTO, Usuario>(); 
        }
    }
}
