using DAL.Abstract;
using EntityLib.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace KSM.Controllers
{
    [Route("api/[controller]")]
    public class QueuesController : KSMController
    {
        public QueuesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("[action]")]
        public Queue[] GetAllQueues()
        {
            return _unitOfWork.GetRepository<Queue>().GetList(null, x => x.OrderBy(i => i.StartDate));
        }

        [HttpGet("[action]/{id}")]
        public Queue[] GetSeasonQueues(int id)
        {
            return _unitOfWork.GetRepository<Queue>().GetList(x => x.SeasonId == id, x => x.OrderBy(i => i.StartDate), x => x.Include(i => i.Matches));
        }
    }
}
