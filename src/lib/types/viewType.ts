export const VIEWS = [
    "grid", "list", "fullgrid", "favorites"] as const;

export type ViewType = 
    typeof VIEWS[number];

