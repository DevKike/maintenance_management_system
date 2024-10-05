import { IMaintenance } from "../maintenance/IMaintenance";

export interface IProcess {
  id: number;
  name: string;
  description: string;
  maintenance: IMaintenance;
}
