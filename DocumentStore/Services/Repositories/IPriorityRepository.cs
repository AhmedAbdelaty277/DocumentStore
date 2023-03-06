using DocumentStore.Models;
using System.Collections.Generic;

namespace DocumentStore.Services.Repositories
{
    public interface IPriorityRepository
    {
        List<Priority> GetAll();
    }
}