using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project2_WellnessAppDbFirst.Models;

namespace Project2_WellnessAppDbFirst.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfilesController : ControllerBase
    {
        private readonly WellnessDb2Context _context;

        public UserProfilesController(WellnessDb2Context context)
        {
            _context = context;
        }

        // GET: api/UserProfiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserProfiles>>> GetUserProfiles()
        {
            return await _context.UserProfiles.ToListAsync();
        }

        // GET: api/UserProfiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserProfiles>> GetUserProfiles(int id)
        {
            var userProfiles = await _context.UserProfiles.FindAsync(id);

            if (userProfiles == null)
            {
                return NotFound();
            }

            return userProfiles;
        }

        // PUT: api/UserProfiles/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserProfiles(int id, UserProfiles userProfiles)
        {
            if (id != userProfiles.Id)
            {
                return BadRequest();
            }

            _context.Entry(userProfiles).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserProfilesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserProfiles
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserProfiles>> PostUserProfiles(UserProfiles userProfiles)
        {
            _context.UserProfiles.Add(userProfiles);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserProfiles", new { id = userProfiles.Id }, userProfiles);
        }

        // DELETE: api/UserProfiles/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserProfiles>> DeleteUserProfiles(int id)
        {
            var userProfiles = await _context.UserProfiles.FindAsync(id);
            if (userProfiles == null)
            {
                return NotFound();
            }

            _context.UserProfiles.Remove(userProfiles);
            await _context.SaveChangesAsync();

            return userProfiles;
        }

        private bool UserProfilesExists(int id)
        {
            return _context.UserProfiles.Any(e => e.Id == id);
        }
    }
}
