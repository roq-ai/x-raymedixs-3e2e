import { EquipmentInterface } from 'interfaces/equipment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MaintenanceInterface {
  id?: string;
  notes?: string;
  equipment_id?: string;
  technician_id?: string;
  created_at?: any;
  updated_at?: any;

  equipment?: EquipmentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MaintenanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  notes?: string;
  equipment_id?: string;
  technician_id?: string;
}
