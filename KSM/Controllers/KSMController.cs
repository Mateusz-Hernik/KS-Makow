using DAL.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace KSM.Controllers
{
    public class KSMController : Controller
    {
        protected IUnitOfWork _unitOfWork { get; set; }
    }
}