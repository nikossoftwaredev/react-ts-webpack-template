export type SliceState = { [key: string]: any };

interface SetUIDataAction {
  payload: { path: string; value: any; index?: number; initialize?: boolean };
}
interface ResetUIDataPayload {
  path: string;
  value?: any;
}
