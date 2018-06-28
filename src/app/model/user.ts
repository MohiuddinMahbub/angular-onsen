export class User {
	constructor(

		public  userId: number,
		public  userVer: number,
		public  remitUserId: number,
		public  remitUserVer: number,
		public  regionKey: number,
		public  groupKey: number,
		public  legalEntityKey: number,
		public  isDisabled: number,
		public  isAllowLogin: number,
		public  primaryGroupId: number,
		public  userModKey: number,
		public  isDefault: number,
		public  loginKey: number,
		public  loginVer: number,
		public  envId: number,
		public  isLoggedIn: number,
		public  customerId: number,
		public  custUserId: number,
		public  userInfoId: number,
		public  userInfoVer: number,
		public  isEnableRemitUser: number,

		public  userName: string,
		public  password: string,
		public  newPassword: string,
		public  firstName: string,
		public  lastName: string,
		public  loginName: string,
		public  userAlias: string,
		public  legalEntityName: string,
		public  primaryGroupName: string,
		public  remitterPhone: string,
		public  userEmail: string,
		public  userPhone: string,
		public  accountNo: string,
		public  customerEmail: string,
		public  customerName: string,
		public  userAuthCode: string,
		public  errMsg: string,

		public  dateModified: Date,
		public  customerDob: Date,
	){}
}
