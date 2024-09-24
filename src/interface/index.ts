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

export interface IFacultad {
  id_facultad: number;
  nombre_facultad: string;
  id_escuelas_prof: string;
}

export interface IEscuelaProf {
  id_escuela_prof: number;
  escuela_prof: string;
}

export interface IComensal {
  id_comensal: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  id_escuela_prof: number;
  id_facultad: number;
  cod_estudiante: number;
  dni: number;
  sexo: string;
  nmr_celular: number;
  email: string;
  password: string;
  url_foto: string;
  id_tickets: string;
  id_pases_semanales: string;
}

export interface ITicket {
  id_ticket_diario: number;
  cantidad: string;
  stock: string;
  estado: string;
  tiempo: string;
  fecha_activacion: string;
  hora_disponible: string;
  id_tarifa: string;
  id_tipo_ticket: string;
}
