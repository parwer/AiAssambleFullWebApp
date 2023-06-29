using Azure.Identity;
using Demo.Data;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class User: ControllerBase
    {
        private readonly UserContext _userDb;

        public User(UserContext userDb)
        {
            _userDb = userDb;
        }

        [HttpGet]
        public IActionResult GET()
        {
            var users = _userDb.Users.ToList();
            return Ok(users);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetById(int id)
        {
            var user = _userDb.Users.FirstOrDefault(x => x.Id == id);
            return Ok(user);
        }

        [HttpPost]
        public IActionResult POST(Models.UserModel user)
        {
            var exits = _userDb.Users.Any(e => e.Id == user.Id);
            if (exits)
            {
                return NotFound(exits);
            }

            var exitingUsername = _userDb.Users.Any(e => e.Username == user.Username);
            if (exitingUsername)
            {
                return BadRequest(exitingUsername);
            }

            var entry = _userDb.Add(user);
            _userDb.SaveChanges();

            var newUser = entry.Entity;

            return CreatedAtAction(
                    nameof(GetById),
                    new { id = user.Id},
                    newUser
                );
        }

        [HttpPut("{id:int}")]
        public IActionResult UPDATE(int id, Models.UserModel user)
        {
            var exitingUser = _userDb.Users.FirstOrDefault(e => e.Id == id);
            if (exitingUser == null )
            {
                return NotFound(exitingUser);
            }
            var exitingUsername = _userDb.Users.Any(e => e.Username == user.Username);
            if (exitingUsername)
            {
                return BadRequest(exitingUsername);
            }

            exitingUser.Username = user.Username;
            exitingUser.Password = user.Password;

            _userDb.Update(exitingUser);
            _userDb.SaveChanges();

            return Ok(exitingUser);
        }

        [HttpDelete("{id:int}")]
        public IActionResult DELETE(int id)
        {
            var exitingUser = _userDb.Users.FirstOrDefault(e => e.Id == id);
            if (exitingUser == null)
            {
                return NotFound(exitingUser);
            }
            _userDb.Remove(exitingUser);
            _userDb.SaveChanges();
            return Ok(exitingUser);
        }

    }
}
