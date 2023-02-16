import {DataSize} from "./data_size";
import {Workload} from "./workload";
import {Environment} from "./environment";

export interface Sizing {

  id: string;
  title: string;
  dateCreated: Date;
  lastUpdated: Date;

  description: string;
dataSize: DataSize[];
environments: Environment[];

workload: Workload;



}
