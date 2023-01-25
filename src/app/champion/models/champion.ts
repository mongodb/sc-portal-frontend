import {Contact} from "./contact";
import {Account} from "../../account/models/account";

export interface Champion {

  status: string;
  championType: string;

  developmntPlan: {
    _id: string;
    status: string;
  }

  interests: string[];
  productInterests:[];
  speaker: boolean;
  dateOfBirth: Date;

  family:{
    married: boolean;
    kids: string[];
  }

  strength: number;


}
