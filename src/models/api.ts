import { IUser } from './user';
interface IAPILogin{
  message : string,
  token: string,
  data: IUser
}

type IAPIGetUser = Pick<IAPILogin,'data'>

interface IAPIRegister{
  message : string
}

interface IAPICommon{
  message : string
}

interface IAPIToken {
  token: string
}

export {
  IAPILogin,
  IAPIRegister,
  IAPICommon,
  IAPIToken,
  IAPIGetUser
};