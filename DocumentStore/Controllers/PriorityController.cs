using DocumentStore.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using DocumentStore.Services.Repositories;

namespace DocumentStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriorityController : ControllerBase
    {
        private readonly IPriorityRepository priorityRepository;

        public PriorityController(IPriorityRepository _prioRepo)
        {
            priorityRepository = _prioRepo;
        }

        [HttpGet("GetAllPriorites")]
        public IActionResult GetAllPriorites()
        {
            List<Priority> documentModel = priorityRepository.GetAll();
            return Ok(documentModel);
        }
    }
}
