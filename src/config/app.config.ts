interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Service Technician'],
  tenantName: 'Organization',
  applicationName: 'X-RayMedIxs',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
