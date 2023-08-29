export interface Auth {
  data: null;  
  status: 'loading' | 'loaded' | 'error';
}

export interface UserParams {
  email: string;
  password: string;
}