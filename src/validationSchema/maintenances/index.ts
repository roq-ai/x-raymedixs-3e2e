import * as yup from 'yup';

export const maintenanceValidationSchema = yup.object().shape({
  notes: yup.string().nullable(),
  equipment_id: yup.string().nullable(),
  technician_id: yup.string().nullable(),
});
