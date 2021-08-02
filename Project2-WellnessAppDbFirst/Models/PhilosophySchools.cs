using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project2_WellnessAppDbFirst.Models
{
    public partial class PhilosophySchools
    {
        public PhilosophySchools()
        {
            UserProfiles = new HashSet<UserProfiles>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<UserProfiles> UserProfiles { get; set; }
    }
}
