export interface IValorNuticional {
  carbohidratos: number;
  proteinas: number;
  grasas: number;
}

export interface IDesayuno extends IValorNuticional {
  id_desayuno: number;
  bebible: string;
  acompaniamiento: string | null;
  aditivo: string | null;
  fruta_postre: string | null;
  image_url: string | null;
}

export interface IAlmuerzo extends IValorNuticional {
  id_almuerzo: number;
  sopa_entrada: string;
  segundo: string;
  ensalada: string | null;
  fruta: string | null;
  postre: string | null;
  refresco: string | null;
  image_url: string | null;
}

export interface ICena extends IValorNuticional {
  id_cena: number | null;
  plato_principal: string | null;
  postre: string | null;
  bebida: string | null;
  image_url: string | null;
}

export interface IMenu {
  id_menu: number;
  fecha: string;
  desayuno: IDesayuno;
  almuerzo: IAlmuerzo;
  cena: ICena;
}
