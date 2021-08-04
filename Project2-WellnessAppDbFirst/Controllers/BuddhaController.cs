﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1_WellnessApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Project1_WellnessApp.Models.Buddha;

namespace Project1_WellnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuddhaController : ControllerBase
    {
        public BuddhaDAL buddhaDAL = new BuddhaDAL();
        //Get api/Yoga/
        [HttpGet]
        public async Task<ActionResult<BuddhaQuote>> GetBuddhaQuote()
        {
            BuddhaQuote buddhaQuote = buddhaDAL.GetBuddhaQuote();

            return buddhaQuote;

        }
    }
}
