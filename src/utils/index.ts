import { IAlmuerzo, ICena, IDesayuno, IMenu } from '../interfaz';
export const getMenuByDay = (menus: IMenu[], current_day: string): { desayuno: IDesayuno; almuerzo: IAlmuerzo; cena: ICena } | null => {
  for (const menu of menus) {
    if (menu.fecha === current_day) {
      return {
        desayuno: menu.desayuno,
        almuerzo: menu.almuerzo,
        cena: menu.cena,
      };
    }
  }
  return null;
};

export const calculateEnergy = ({ carbohidratos, grasas, proteinas }: IDesayuno | IAlmuerzo | ICena): number =>
  carbohidratos * 4 + proteinas * 4 + grasas * 9;
