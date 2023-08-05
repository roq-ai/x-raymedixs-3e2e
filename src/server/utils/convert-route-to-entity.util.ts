const mapping: Record<string, string> = {
  equipment: 'equipment',
  maintenances: 'maintenance',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
