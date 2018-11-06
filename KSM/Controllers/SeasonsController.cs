using DAL.Abstract;
using EntityLib.Models;
using KSM.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace KSM.Controllers
{
    [Route("api/[controller]")]
    public class SeasonsController : KSMController
    {
        public SeasonsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("[action]/{id}")]
        public Season GetSeason(int id)
        {
            try
            {
                return _unitOfWork.GetRepository<Season>().Single(x => x.Id == id, x => x.Include(i => i.Queues));
            }
            catch(Exception ex)
            {
                // TODO Logger implementation
            }

            return null;
        }

        [HttpGet("[action]")]
        public Season[] GetAllSeasons()
        {            
            return _unitOfWork.GetRepository<Season>().GetList(null, x => x.OrderByDescending(i => i.EndDate));
        }

        [HttpPost("[action]/{id}")]
        public void UpdateSeason(int id, [FromBody] SeasonDTO updatedSeason)
        {
            Season item = _unitOfWork.GetRepository<Season>().Single(x => x.Id == id);

            if(item != null)
            {
                item.Name = updatedSeason.Name;
                item.StartDate = updatedSeason.StartDate;
                item.EndDate = updatedSeason.EndDate;

                _unitOfWork.GetRepository<Season>().Update(item);
                _unitOfWork.SaveChanges();
            }
        }

        [HttpDelete("[action]/{id}")]
        public void DeleteSeason(int id)
        {
            try
            {
                _unitOfWork.GetRepository<Season>().Delete(x => x.Id == id);
                _unitOfWork.SaveChanges();
            }
            catch(Exception ex)
            {
                //TODO Logger implementation
            }
        }

        [HttpPost("[action]")]
        public void AddSeason([FromBody] SeasonDTO newSeason)
        {
            try
            {
                _unitOfWork.GetRepository<Season>().Insert(new Season()
                {
                    Name = newSeason.Name,
                    StartDate = newSeason.StartDate,
                    EndDate = newSeason.EndDate
                });
                _unitOfWork.SaveChanges();
            }
            catch(Exception ex)
            {
                //TODO Logger implementation
            }
        }
    }
}
