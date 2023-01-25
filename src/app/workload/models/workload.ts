import {Account} from "../../account/models/account";
import {Contact} from "../../champion/models/contact";

export interface Workload {
  inProduction: boolean;
  dataStore:  string;
  currentHosting: string;
  targetCloud: string;
  workloadType: string;

  description: string;
  name: string;
  org: Account;

  pointsOfContact: Contact[];

  _id: string;


}

function shortDesc(workload: Workload):string {
  return workload.description.length > 50 ? workload.description.substring(0, 50) : workload.description
}
