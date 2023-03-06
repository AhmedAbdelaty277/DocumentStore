using DocumentStore.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using DocumentStore.Services.Repositories;

namespace DocumentStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentsController : ControllerBase
    {
        private readonly IDocumentRepository documentRepository;

        public DocumentsController(IDocumentRepository _docRepo)
        {
            documentRepository = _docRepo;
        }

        [HttpGet("GetAllDocuments")]
        public IActionResult GetAllDocuments()
        {
            List<Document> documentModel = documentRepository.GetAll();
            return Ok(documentModel);
        }

        [HttpGet("DocumentDetails")]
        public IActionResult DocumentDetails(int id)
        {
            Document documentModel = documentRepository.GetById(id);

            if (documentModel == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(documentModel);
            }
        }

        [HttpPost("InsertDocument")]
        public IActionResult InsertDocument(Document newDoc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            else
            {
                documentRepository.Insert(newDoc);
                return Ok("Document Inserted Successfully");
            }
        }

        [HttpPut("UpdateDocument")]
        public IActionResult UpdateDocument(int id, Document newDoc)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            else
            {
                documentRepository.Update(id, newDoc);
                return Ok("Document Information Updated Succesfully");
            }
        }

        [HttpDelete("DeleteDocument")]
        public IActionResult DeleteDocument(int id)
        {
            Document documentModel = documentRepository.GetById(id);

            if (documentModel == null)
            {
                return NotFound();
            }
            else
            {
                documentRepository.Delete(id);
                return Ok("Document Deleted Succesfully");
            }
        }
    }
}
