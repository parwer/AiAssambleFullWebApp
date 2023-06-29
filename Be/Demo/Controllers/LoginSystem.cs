using Demo.Data;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginSystem : ControllerBase
    {
        private readonly UserContext _userDb;
        public LoginSystem(UserContext userDb)
        {
            _userDb = userDb;
        }

        [HttpPost]
        public IActionResult USER(Models.UserModel user)
        {
            var exist = _userDb.Users.FirstOrDefault(x => x.Username == user.Username);
            if (exist == null)
            {
                return Ok(new { Status="not found user"});
            }
            if (exist.Password != user.Password)
            {
                return Ok(new { Status="wrong password"});
            }
            return Ok(
                    new { User=exist, Status="Ok"}
                );
        }
    }
}
