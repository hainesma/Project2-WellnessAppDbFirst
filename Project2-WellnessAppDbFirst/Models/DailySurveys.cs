using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project2_WellnessAppDbFirst.Models
{
    public partial class DailySurveys
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? EmotionLevel { get; set; }
        public string DailyGoal { get; set; }
        public bool? PreviousGoalAchieved { get; set; }
    }
}
