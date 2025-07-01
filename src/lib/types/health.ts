export interface Health {
  mongo: 'connected' | 'disconnected';
  uptime: number;
}
