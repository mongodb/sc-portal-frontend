import {Address} from "./address";
import {Account} from "../../account/models/account";
import {Champion} from "./champion";

export interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  preferredName: string;

  social: {
    linkedInUrl: string;
    twitter: string;
  }

  role: string;

  tenure: string;
  linkedin_urn: string;
  linkedin_url: string;
  email: string;
  phone: string[];
  address: Address;
  account: Account;

  champion: Champion;

  lastContacted: Date;
  firstContacted: Date;




}
