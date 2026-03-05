using AutoMapper;
using HermesAPI.DTOs.Notificacao;
using HermesAPI.Entities;

namespace HermesAPI.Profiles
{
    public class NotificacaoProfile: Profile
    {
        public NotificacaoProfile()
        {
            CreateMap<Notificacao, NotificacaoDTO>();
        }
    }
}
