import { IAlmuerzo, ICena, IDesayuno, IMenu, IValorNuticional } from '../interfaz';

export const calculate_energy = ({ carbohidratos, proteinas, grasas }: IValorNuticional): number => {
  return carbohidratos * 4 + proteinas * 4 + grasas * 9;
};

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
