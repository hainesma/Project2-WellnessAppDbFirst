using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project2_WellnessAppDbFirst.Models
{
    public partial class UserProfiles
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string AspNetUserFk { get; set; }
        public int? FoodRegimenFk { get; set; }
        public int? PhilosophySchoolFk { get; set; }

        public virtual AspNetUsers AspNetUserFkNavigation { get; set; }
        public virtual FoodRegimens FoodRegimenFkNavigation { get; set; }
        public virtual PhilosophySchools PhilosophySchoolFkNavigation { get; set; }
    }
}
