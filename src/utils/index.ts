import { IAlmuerzo, ICena, IDesayuno, IMenu } from '../interface';

export const getMenuByDay = (menus: IMenu[], current_day: string): IMenu | null => {
  for (const menu of menus) if (menu.fecha === current_day) return menu;
  return null;
};

export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export const getFoodType = (current_time: string): string => {
  return timeToMinutes(current_time) < timeToMinutes('08:30')
    ? 'desayuno'
    : timeToMinutes(current_time) < timeToMinutes('14:00')
      ? 'almuerzo'
      : 'cena';
};

export const getFoodByTime = (menus: IMenu[], current_day: string, current_time: string): IDesayuno | IAlmuerzo | ICena | null => {
  for (const menu of menus) {
    if (menu.fecha === current_day) {
      if (timeToMinutes(current_time) <= timeToMinutes('08:30')) return menu.desayuno;
      if (timeToMinutes(current_time) <= timeToMinutes('14:00')) return menu.almuerzo;
      if (timeToMinutes(current_time) <= timeToMinutes('20:30')) return menu.cena;
    }
  }

  return null;
};

export const calculateEnergy = ({ carbohidratos, grasas, proteinas }: IDesayuno | IAlmuerzo | ICena): number =>
  carbohidratos * 4 + proteinas * 4 + grasas * 9;

export const getEnegyDay = (menu: IMenu): { e_desayuno: number; e_almuerzo: number; e_cena: number } => {
  return { e_desayuno: calculateEnergy(menu.desayuno), e_almuerzo: calculateEnergy(menu.almuerzo), e_cena: calculateEnergy(menu.cena) };
};
