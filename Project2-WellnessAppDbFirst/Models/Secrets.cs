using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project2_WellnessAppDbFirst.Models
{
    public class Secret
    {
        public static string AzureString { get; set; } = "Server=tcp:dream-team.database.windows.net,1433;Initial Catalog=WellnessDb;Persist Security Info=False;User ID=Project1;Password=wMRBWTRrDPyZw9RX;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
    }
}