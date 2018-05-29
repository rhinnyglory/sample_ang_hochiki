export interface Login {
    // client_id?: string,
    // grant_type?: string,
    email: string;
    password: string;
  }
  export interface Token {
    name: string;
    roleId: number;
    userId: number;
    access_token: string;
    // expires: number,
    // token_type: string,
    // user: string,
    email: string;
    data: any;
    headers: any;
  }