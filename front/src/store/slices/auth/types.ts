export interface Auth {
  data: {
    userData: null | {
      _id: string;
      fullName: string;
      email: string;
      createdAt: string;
    }
  };
  status: 'loading' | 'loaded' | 'error';
}

export interface UserParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  fullName: string;
  email: string;
  password: string;
}