CREATE TABLE FoodRegimens (
Id INT PRIMARY KEY IDENTITY(1,1),
[Name] nvarchar(25)
)

CREATE TABLE PhilosophySchools (
Id INT PRIMARY KEY IDENTITY(1,1),
[Name] nvarchar(25)
)

CREATE TABLE UserProfiles (
ID INT PRIMARY KEY IDENTITY(1,1),
FirstName NVARCHAR(20),
BirthDate DATE,
AspNetUserFK NVARCHAR(450) FOREIGN KEY REFERENCES AspNetUsers(Id),
FoodRegimenFK INT FOREIGN KEY REFERENCES FoodRegimens(Id),
PhilosphySchoolFK INT FOREIGN KEY REFERENCES PhilosophySchools(Id),
)