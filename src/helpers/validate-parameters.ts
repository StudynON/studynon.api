export default class Validate {
  public static isNotEmpty = (param: string | number): boolean => {
    return !(param == null || param == undefined || param === '');
  };

  public static isString = (param: string): boolean => {
    return typeof param == 'string' && typeof param != 'number';
  };
}
