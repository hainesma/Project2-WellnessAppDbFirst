using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1_WellnessApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Project1_WellnessApp.Models.Yoga;

namespace Project1_WellnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YogaController : ControllerBase
    {
        public YogaDAL yogaDAL = new YogaDAL();

        //Get :api/Yoga/
        [HttpGet]
        public async Task<ActionResult<Pose>> GetPose()
        {
            Pose pose = yogaDAL.GetPose();

            return pose;

        }
    }
}
