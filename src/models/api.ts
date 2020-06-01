interface IAPILogin{
  message : string,
  token: string,
}
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
  IAPIToken
};