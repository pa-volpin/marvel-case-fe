import { types, IFloatBoxPayload } from './types';

const open = (payload: IFloatBoxPayload) => ({ type: types.OPEN , payload });

const close = () => ({ type: types.CLOSE });

export {
 open,
 close
}