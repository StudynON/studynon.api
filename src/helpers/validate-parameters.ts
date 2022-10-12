export default class Validate {
  public static isNotEmpty = (param: string | number): boolean => {
    return !(param == null || param == undefined || param === '');
  };
}
