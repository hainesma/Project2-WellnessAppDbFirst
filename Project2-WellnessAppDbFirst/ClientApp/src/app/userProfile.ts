export interface UserProfile {
    // id:                          number | null;
    firstName:                   string;
    birthDate:                   Date;
    aspNetUserFk:                string;
    foodRegimenFk:               number;
    philosophySchoolFk:           number;
    aspNetUserFkNavigation:      null;
    foodRegimenFkNavigation:     null;
    philosophySchoolFkNavigation: null;
}
