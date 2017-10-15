export class Profile {
    _id : string;
    firstName: string;
    lastName: string;
    thumbnail: string;
    userName: string;
    status: string;
    emailId: string;
    city: string;
    country: string;
    zipCode: string;
}

export class Group {
    _id : string;
    name: string;
    thumbnail: string;
    updatedBy: string; 
    updatedOn: Date;
    status: string;
    fileStorage: string;
    description: string;
    createdBy: string;
    members:[Profile]
}