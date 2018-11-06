using DAL.Abstract;
using EntityLib.Models;
using KSM.Models;
using KSM.Utils;
using Microsoft.AspNetCore.Mvc;

namespace KSM.Controllers
{
    [Route("[controller]")]
    public class UserController : KSMController
    {
        public UserController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost]
        [Route("login")]
        public bool Login([FromBody] UserDTO user)
        {
            var dbUser = _unitOfWork.GetRepository<User>().Single(x => x.UserName == user.Username);

            if(dbUser != null)
            {
                if (SecurePasswordHasher.Verify(user.Password, dbUser.PasswordHash))
                    return true;
            }

            return false;
        }
    }
}
