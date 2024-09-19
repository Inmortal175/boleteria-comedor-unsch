export interface CalculateEnergyParams {
  carbohydrates: number;
  proteins: number;
  fats: number;
}

export const calculate_energy = ({ carbohydrates, proteins, fats }: CalculateEnergyParams): number => {
  return carbohydrates * 4 + proteins * 4 + fats * 9;
};
