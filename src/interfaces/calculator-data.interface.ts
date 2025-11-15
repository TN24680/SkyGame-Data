import { DateTime } from 'luxon';
import type { IGuid } from './base.interface.js';

export interface ICalculatorData {
  dailyCurrencyAmount?: number;
  timedCurrency?: Array<ICalculatorDataTimedCurrency>;
};

export interface ICalculatorDataTimedCurrency extends IGuid {
  description?: string;
  date: DateTime;
  endDate: DateTime;
  amount: number;
}
