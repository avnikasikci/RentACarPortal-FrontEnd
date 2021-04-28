import { createAction, props } from '@ngrx/store';
import { UserDetail } from '../../models/userDetail';
// debugger;
export const setUserDetail = createAction(
  'Set UserDetail',
  props<{ userDetail: UserDetail }>()
);
// debugger;
export const deleteUserDetail = createAction('Delete User Detail');
