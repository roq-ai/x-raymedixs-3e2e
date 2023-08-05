import { MaintenanceInterface } from 'interfaces/maintenance';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EquipmentInterface {
  id?: string;
  name: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  maintenance?: MaintenanceInterface[];
  organization?: OrganizationInterface;
  _count?: {
    maintenance?: number;
  };
}

export interface EquipmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  organization_id?: string;
}
