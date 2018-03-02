interface Res<T> {
  statusCode: number;
  message: string;
  error?: any;
  data?: T;
}