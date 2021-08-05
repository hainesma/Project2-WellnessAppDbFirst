﻿using System;
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
    public class DailySurveysController : ControllerBase
    {
        private readonly WellnessDb2Context _context;

        public DailySurveysController(WellnessDb2Context context)
        {
            _context = context;
        }

        // GET: api/DailySurveys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DailySurveys>>> GetDailySurveys()
        {
            return await _context.DailySurveys.ToListAsync();
        }

        // GET: api/DailySurveys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DailySurveys>> GetDailySurveys(int id)
        {
            var dailySurveys = await _context.DailySurveys.FindAsync(id);

            if (dailySurveys == null)
            {
                return NotFound();
            }

            return dailySurveys;
        }

        // PUT: api/DailySurveys/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDailySurveys(int id, DailySurveys dailySurveys)
        {
            if (id != dailySurveys.Id)
            {
                return BadRequest();
            }

            _context.Entry(dailySurveys).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DailySurveysExists(id))
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

        // POST: api/DailySurveys
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DailySurveys>> PostDailySurveys(DailySurveys dailySurveys)
        {
            _context.DailySurveys.Add(dailySurveys);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDailySurveys", new { id = dailySurveys.Id }, dailySurveys);
        }

        // DELETE: api/DailySurveys/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DailySurveys>> DeleteDailySurveys(int id)
        {
            var dailySurveys = await _context.DailySurveys.FindAsync(id);
            if (dailySurveys == null)
            {
                return NotFound();
            }

            _context.DailySurveys.Remove(dailySurveys);
            await _context.SaveChangesAsync();

            return dailySurveys;
        }

        private bool DailySurveysExists(int id)
        {
            return _context.DailySurveys.Any(e => e.Id == id);
        }
    }
}
