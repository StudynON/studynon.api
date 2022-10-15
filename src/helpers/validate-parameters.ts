export default class Validate {
  private static emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  public static isNotEmpty = (param: string | number): boolean => {
    return !(param == null || param == undefined || param === '');
  };

  public static isString = (param: string): boolean => {
    return typeof param == 'string' && typeof param != 'number';
  };

  public static isNumber = (param: number): boolean => {
    return !isNaN(param) && typeof param == 'number';
  };

  public static isBoolean = (param: boolean): boolean => {
    return typeof param == 'boolean';
  };

  public static isEmail = (email: string): boolean => {
    return (this.emailRegEx.test(email));
  };
}
