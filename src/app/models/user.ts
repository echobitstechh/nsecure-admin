
export interface  AdminProfile{
  adminId: string,
  fullName:string,
  lastName: string,
  email:string,
  role: string,
  image:string,
  password: string,
  createdAt: string,
  updatedAt: string,


}
export class AdminProfile {
  constructor(
     adminId: string,
     fullName: string,
     lastName: string,
   email: string,
     role:string,
     image: string,
     password: string,
     createdAt: string,
     updateAt: string,
  ) {
  }
}
