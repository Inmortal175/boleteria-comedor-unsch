import { IAlmuerzo, ICena, IDesayuno, IMenu } from '../interface';

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

export const getFoodByTime = (menus: IMenu[], current_day: string, current_time: string): IDesayuno | IAlmuerzo | ICena | null => {
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const [currentHour, currentMinute] = current_time.split(':').map(Number);
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  for (const menu of menus) {
    if (menu.fecha === current_day) {
      if (currentTimeInMinutes <= timeToMinutes('08:30')) return menu.desayuno;
      if (currentTimeInMinutes <= timeToMinutes('14:30')) return menu.almuerzo;
      if (currentTimeInMinutes <= timeToMinutes('20:30')) return menu.cena;
    }
  }

  return null;
};

export const calculateEnergy = ({ carbohidratos, grasas, proteinas }: IDesayuno | IAlmuerzo | ICena): number =>
  carbohidratos * 4 + proteinas * 4 + grasas * 9;
